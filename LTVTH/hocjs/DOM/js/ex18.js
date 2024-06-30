/*
Web Component: Chia nhỏ các thành phần trang web thành các thẻ html riêng biệt, dễ dàng tái sử dụng
- header
- footer
- product

Khi nào cần tách web component
- Sử dụng ở nhiều nơi
- Linh hoạt (Chỉ cần gọi thẻ html)
- Logic, giao diện phức tạp

Các bước định nghĩa component

- Xây dựng class tương ứng (Kế thừa từ HTMLElement)
- Xác định logic cần có trong component
- Đăng ký thẻ html (Lưu ý: Tên thẻ phải có 2 từ và nối bằng gạch ngang)

Lifecycle Callback
- Vòng đời khi 1 component được tạo ra đến khi nó bị loại bỏ khỏi DOM
- 3 giai đoạn: 
+ Khởi tạo
+ Cập nhật
+ Loại bỏ

Khi làm việc với web component ==> Giải quyết được vấn đề css (Scope Stylesheet) ==> SHADOW DOM
*/
//các nội dung xử lý liên quan tới giao diện: inner, query thì cho shadowRoot

class TodoApp extends HTMLElement {
  //   static observedAttributes = ["data-count"];
  connectedCallback() {
    this.render();
    this.addEvent();
  }
  render() {
    this.innerHTML = `
    <div class="todo-app">
        <h1>Todo App</h1>
        <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
        </ul>
        <form>
            <input type="text" placeholder="Name..."/>
            <button type="submit">Add</button>
        </form>
    </div>
    <style>
        h1 {
            color: red;
        }
    </style>
    `;
  }
  addEvent() {
    var form = this.querySelector("form");
    var _this = this;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      _this.handleAddTodo(e.target);
    });
  }
  handleAddTodo(event) {
    var nameEl = event.querySelector("input");
    var name = nameEl.value;
    var ul = this.querySelector("ul");
    ul.innerHTML += `<li>${name}</li>`;
    nameEl.value = "";
  }
  //   disconnectedCallback() {
  //     console.log("Component bị loại bỏ khỏi DOM");
  //   }
  //   attributeChangedCallback(name, oldValue, newValue) {
  //     console.log(
  //       `Thay đổi thuộc tính ${name}, giá trị cũ: ${oldValue}, giá trị mới ${newValue}`
  //     );
  //   }
}
customElements.define("todo-app", TodoApp);

// var btn = document.querySelector(".btn");
// var todoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//   //   todoAppEl.remove();
//   todoAppEl.dataset.count++;
// });
