// Tạo một phương thức mới cho prototype của Array
Array.prototype.push2 = function (...elements) {
  // Lấy độ dài ban đầu của mảng
  var length = this.length;

  // Duyệt qua từng phần tử trong elements và thêm vào mảng
  for (var i = 0; i < elements.length; i++) {
    this[length + i] = elements[i];
  }

  // Cập nhật và trả về độ dài mới của mảng
  this.length = length + elements.length;
  return this.length;
};

// Ví dụ sử dụng
var arr = [1, 2, 3];
console.log(arr.push2(4, 5)); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4, 5]
