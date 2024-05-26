// Đầu vào là một mảng chứa các chuyên mục với id, name và parent
const inputArray = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

// Tạo đối tượng chứa các chuyên mục theo id
const categoryMap = {};

// Bước 1: Duyệt qua từng phần tử trong mảng đầu vào và khởi tạo mỗi chuyên mục trong categoryMap
inputArray.forEach((item) => {
  // Sao chép các thuộc tính của item và thêm thuộc tính children là một mảng rỗng
  categoryMap[item.id] = { ...item, children: [] };
});

// Bước 2: Xây dựng cấu trúc lồng nhau cho các chuyên mục
const nestedCategories = [];

inputArray.forEach((item) => {
  if (item.parent === 0) {
    // Nếu parent là 0, đây là chuyên mục cấp cao nhất, thêm vào mảng kết quả
    nestedCategories.push(categoryMap[item.id]);
  } else {
    // Nếu parent khác 0, đây là chuyên mục con, thêm vào mảng children của chuyên mục cha
    categoryMap[item.parent].children.push(categoryMap[item.id]);
  }
});

// In ra kết quả
console.log(JSON.stringify(nestedCategories, null, 2));
