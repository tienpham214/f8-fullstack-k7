// Tạo một phương thức mới cho prototype của Array
Array.prototype.filter2 = function (callback) {
  // Kiểm tra nếu callback không phải là một hàm
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // Mảng kết quả để lưu các phần tử thỏa mãn điều kiện của callback
  var result = [];

  // Duyệt qua từng phần tử trong mảng
  for (var i = 0; i < this.length; i++) {
    // Kiểm tra nếu phần tử tồn tại (để xử lý các giá trị trống trong mảng sparse)
    if (i in this) {
      // Gọi hàm callback với các tham số (phần tử, chỉ mục, mảng gốc)
      if (callback(this[i], i, this)) {
        // Nếu callback trả về true, thêm phần tử vào mảng kết quả
        result.push(this[i]);
      }
    }
  }

  // Trả về mảng kết quả
  return result;
};

// Ví dụ sử dụng
var arr = [1, 2, 3, 4, 5];
var filteredArr = arr.filter2(function (element) {
  return element > 2;
});
console.log(filteredArr); // Output: [3, 4, 5]
