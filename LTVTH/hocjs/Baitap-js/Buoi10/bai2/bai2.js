// Thêm phương thức getCurrency vào prototype của Number
Number.prototype.getCurrency = function (currencySymbol) {
  return (
    this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + currencySymbol
  );
};

// Thêm phương thức getCurrency vào prototype của String
String.prototype.getCurrency = function (currencySymbol) {
  // Chuyển đổi chuỗi sang số trước khi định dạng
  let number = parseFloat(this);
  if (isNaN(number)) {
    throw new Error("Invalid number format");
  }
  return (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    " " +
    currencySymbol
  );
};

// Sử dụng với Number
var priceNumber = 12000;
console.log(priceNumber.getCurrency("đ")); // Hiển thị: 12,000 đ

// Sử dụng với String
var priceString = "12000000";
console.log(priceString.getCurrency("đ")); // Hiển thị: 12,000,000 đ
