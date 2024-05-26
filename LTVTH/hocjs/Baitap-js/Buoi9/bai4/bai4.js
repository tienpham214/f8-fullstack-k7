// Thêm hàm reduce2 vào prototype của Array
Array.prototype.reduce2 = function (callback, initialValue) {
  // Kiểm tra xem callback có phải là một hàm không
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // Khởi tạo giá trị kết quả (result) bằng initialValue nếu có, nếu không thì lấy phần tử đầu tiên của mảng
  var result = initialValue;
  // Khởi tạo chỉ số bắt đầu cho vòng lặp
  var startIndex = 0;

  // Nếu không có initialValue được cung cấp và mảng rỗng, ném ra một ngoại lệ
  if (result === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    // Lấy phần tử đầu tiên của mảng làm giá trị khởi tạo nếu không có initialValue
    result = this[0];
    // Bắt đầu vòng lặp từ phần tử thứ 2 nếu không có initialValue
    startIndex = 1;
  }

  // Duyệt qua mảng từ startIndex đến hết
  for (var i = startIndex; i < this.length; i++) {
    // Gọi callback với các tham số: giá trị kết quả tích luỹ, giá trị hiện tại, chỉ số hiện tại và mảng đang xử lý
    result = callback(result, this[i], i, this);
  }

  // Trả về giá trị kết quả cuối cùng
  return result;
};

// Ví dụ sử dụng
var array = [1, 2, 3, 4];
// Tính tổng các phần tử trong mảng
var sum = array.reduce2(function (previousValue, currentValue) {
  // Cộng giá trị hiện tại với giá trị kết quả tích luỹ
  return previousValue + currentValue;
}, 0);
// In ra tổng
console.log(sum); // Output: 10
