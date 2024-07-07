// component.js

// Định nghĩa một đối tượng để lưu trữ các component đã đăng ký
const F8 = {
  components: {},

  component(name, options) {
    // Lưu trữ component với tên và các tùy chọn đã cung cấp
    this.components[name] = options;
  },
};

// Xử lý phần khởi tạo và render các component
document.addEventListener("DOMContentLoaded", () => {
  // Tìm tất cả các custom element (component) trong DOM
  Object.keys(F8.components).forEach((name) => {
    const elements = document.querySelectorAll(name);
    elements.forEach((element) => {
      // Render nội dung của component vào element
      renderComponent(name, element);
    });
  });
});

// Hàm để thay thế các placeholder {{ ... }} bằng giá trị thực tế từ dữ liệu
function parseTemplate(template, data) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : match;
  });
}

// Hàm render component
function renderComponent(name, element) {
  const component = F8.components[name];

  if (!component) {
    console.error(`Component "${name}" chưa được đăng ký.`);
    return;
  }

  // Nếu component có dữ liệu, khởi tạo state
  const data = typeof component.data === "function" ? component.data() : {};

  // Lưu trữ dữ liệu vào element để có thể cập nhật lại sau
  element.__data__ = data;

  // Thay thế các template placeholder bằng giá trị thực tế
  let content = parseTemplate(component.template, data);
  element.innerHTML = content;

  // Xử lý các sự kiện được định nghĩa trong template
  processEventBindings(element, data, name);
}

// Xử lý các sự kiện được gắn trong template (v-on:...)
function processEventBindings(element, data, componentName) {
  // Tìm tất cả các nút với sự kiện gắn với `v-on`
  const eventBindings = element.querySelectorAll(
    "[v-on\\:click], [v-on\\:dblclick]"
  );

  eventBindings.forEach((el) => {
    // Lấy thuộc tính sự kiện (v-on:click hoặc v-on:dblclick)
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith("v-on:")) {
        const eventType = attr.name.split(":")[1];
        const action = attr.value;

        // Gắn sự kiện vào phần tử
        el.addEventListener(eventType, () => {
          // Cập nhật dữ liệu (increment, decrement, thay đổi title, ...)
          if (action.includes("count++")) {
            data.count++;
          } else if (action.includes("count--")) {
            data.count--;
          } else if (action.includes("title=")) {
            const newTitle = action.split("=")[1].replace(/['"]/g, "");
            data.title = newTitle;
          }

          // Re-render lại component sau khi cập nhật dữ liệu
          // Chỉ re-render lại nội dung của component hiện tại, không render lại toàn bộ trang
          let newContent = parseTemplate(
            F8.components[componentName].template,
            data
          );
          element.innerHTML = newContent;

          // Cần bind lại sự kiện sau khi re-render
          processEventBindings(element, data, componentName);
        });
      }
    });
  });
}
