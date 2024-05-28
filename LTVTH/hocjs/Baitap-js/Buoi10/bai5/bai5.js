var categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

// Hàm để tạo một thẻ option từ một category
function createOption(category, prefix = "") {
  var option = document.createElement("option");
  option.value = category.id;
  option.textContent = `${prefix}${category.name}`;
  return option;
}

// Hàm để tạo các thẻ option từ mảng categories
function createOptions(categories, prefix = "") {
  var options = [];
  categories.forEach((category) => {
    options.push(createOption(category, prefix));
    if (category.children) {
      options.push(...createOptions(category.children, prefix + "--"));
    }
  });
  return options;
}

// Hàm để khởi tạo và gán các tùy chọn vào thẻ select
function populateSelect() {
  var selectElement = document.getElementById("categorySelect");
  var options = createOptions(categories);
  options.forEach((option) => selectElement.appendChild(option));
}

// Thực thi sau khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", populateSelect);
