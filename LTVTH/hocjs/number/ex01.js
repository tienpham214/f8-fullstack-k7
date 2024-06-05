//number là kiểu dữ liệu nguyên thủy
//hàm tạo của number là number

console.dir(Number);

var a = 10;
if (typeof a === "number");
console.log("Đây là số");

//ép kiểu dữ liệu về number

var b = "10";
var c = "10a";
c = Number(c);
b = Number(b);
console.log(typeof b, b);
console.log(typeof c, c);

// cách 2 là dùng dấu  +

var b = "10.5a10";

b = +b;
console.log(typeof b, b);

// cách 3 là ép về số nguyên,số thực

var b = "10.5a10";
b = parseInt(b); //ép về số nguyên
b = parseFloat(b); // ép về số thực
console.log(typeof b, b);

//Kiểm tra 1 số là số nguyên

var a = "a";
if (Number.isInteger(a)) {
  console.log("là số nguyên");
} else {
  console.log("ko phải số nguyên");
}

// Số NaN ( not a number )
var a = 10;
var b = "F8";
var c = a * b;
console.log(c);

if (Number.isNaN(c)) {
  console.log("lỗi tính toán");
}

// Số Infinity : vượt quá khả năng lưu trữ
var a = 10000;
var b = 10000;
var c = a ** b;
var d = 50000 ** 10000;
// console.log(c);
// console.log(d);
// console.log(c === d);

if (c === Infinity || c === -Infinity) {
  console.log("Vượt quá khả năng lưu trữ");
}

//hàm toFixed() :lấy số chữ số phần thập phân và làm tròn
var price = 12345.6789;
console.log(price.toFixed(2));
console.log(price.toFixed(0));

//hàm toPrecision: lấy số phần tử và tròn, ko tính phẩy

console.log(price.toPrecision(7));

console.log(price.toPrecision(4));

//hàm toLcaleString: ngắt số cho dễ nhìn

var price = 200000000000000;
console.log(price.toLocaleString(3));
console.log(price.toLocaleString("vi"));
