/*
// Thực hiện một hàm cho từng giá trị trong mảng
const myArray = [1, 2, 3, 4, 5];
myArray.forEach((number) => console.log(number));

// Áp dụng một hàm cho từng giá trị trong mảng và trả về một mảng mới
const newArray = myArray.map((number) => number * 2);
console.log(newArray); // [2, 4, 6, 8, 10]

// Lọc các giá trị trong mảng dựa trên một điều kiện
const filteredArray = myArray.filter((number) => number % 2 === 0);
console.log(filteredArray); // [2, 4, 6]

// Tìm kiếm một giá trị trong mảng và trả về giá trị đó
const value = myArray.find((number) => number === 3);
console.log(value); // 3

// Tìm kiếm một giá trị trong mảng và trả về chỉ số của giá trị đó
const index = myArray.findIndex((number) => number === 3);
console.log(index); // 2

// Tìm kiếm một giá trị trong mảng và trả về chỉ số cuối cùng của giá trị đó
const lastIndex = myArray.findLastIndex((number) => number === 3);
console.log(lastIndex); // 4

// Kiểm tra xem tất cả các giá trị trong mảng đều thỏa mãn một điều kiện hay không
const allEven = myArray.every((number) => number % 2 === 0);
console.log(allEven); // false

// Kiểm tra xem có ít nhất một giá trị trong mảng thỏa mãn một điều kiện hay không
const atLeastOneEven = myArray.some((number) => number % 2 === 0);
console.log(atLeastOneEven); // true

// Áp dụng một hàm cho từng giá trị trong mảng và trả về một giá trị duy nhất
const sum = myArray.reduce((a, b) => a + b);
console.log(sum); // 15
*/

var numbers = [1, 2, 3, 4, 5, 7, 9];
//some(calback): duyệt qua từng phần tử của mảng ban đầu
//trả về giá trị true/false
//trả về giá trị true khi có ít nhất 1 lần return truthy ở callback

numbers.some(function (value, index) {
  console.log(value, index);
});

//vidu tìm trong mảng numbers xem có số chẵn hay ko

var result = numbers.some(function (value, index) {
  return value % 2 === 0;
  console.log(value, index);
});

console.log(result);

// every(callback)  => ngược lại với some (tất cả đều đúng)

var numbers = [1, 3, 2, 5, 7, 9];
var result = numbers.every(function (value, index) {
  return value % 2 !== 0;
});

console.log(result);

//find(callback)
/*
Điều kiên giống filter
Trả về phần tử đầu tiên tìm được
*/

// var numbers = [1, 3, 2, 5, 7, 9];
// var result1 = numbers.filter(function (numbers) {
//   return numbers > 2;
// });
// console.log(result1);

// var result2 = numbers.fill(function (numbers) {
//   return numbers > 2;
// });
// console.log(result2);

//fillLast(callback) : tìm phần tử cuối cùng
//findIndex(callback): tìm index đầu tiên
//findLastIndex(callback): tìm index cuối cùng

var users = [
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],
  ["D", "D"],
];

// console.log(users);

//Yêu cầu 1: tìm index của mảng  ["B", "B"] trong mảng users

// var index = users.indexOf(["B", "B"]);
// console.log(index);
// var arr = ["B", "B"];
// var index = users.findIndex(function (user) {
//   return user.join() === arr.join();
// });
// console.log(index);

// bài tập 2: Tìm giao của 2 mảng sau
//Kết quả là [1,2]

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = [];
arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});
console.log(result);

//Tìm hiểu về reduce: giảm
