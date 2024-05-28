function calculateSum() {
  // Sử dụng arguments để lấy tất cả các tham số truyền vào
  var numbers = Array.prototype.slice.call(arguments);

  // Kiểm tra từng phần tử trong danh sách các tham số
  for (var i = 0; i < numbers.length; i++) {
    // Nếu phần tử không phải là số hoặc là NaN, trả về thông báo lỗi
    if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
      return "Lỗi: Tất cả các tham số truyền vào phải là số hợp lệ.";
    }
  }

  // Tính tổng các số trong danh sách
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Trả về tổng đã tính
  return sum;
}

// Ví dụ sử dụng hàm
console.log(calculateSum(1, 2, 3, 4)); // Kết quả: 10
console.log(calculateSum(1, "2", 3)); // Kết quả: 'Lỗi: Tất cả các tham số truyền vào phải là số hợp lệ.'
console.log(calculateSum()); // Kết quả: 0
console.log(calculateSum(1, NaN, 3)); // Kết quả: 'Lỗi: Tất cả các tham số truyền vào phải là số hợp lệ.'
