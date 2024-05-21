// Array, object:  khi gán 1 biến bằng array, object => biến mới copy địa chỉ của biến cũ => 2 biến cùng 1 địa chỉ
// Copy array

var oldArr = ["Hoàng An", "hoangan.web@gmail.com"];

// var newArr = oldArr;
//Shallow copy
//- Sử dụng phương thức trả về mảng mới: map, filter, slice, reduce,
var newArr = oldArr.map(function (item) {
  return item;
});

var newArr = oldArr.slice(0);
// - Spread operator --> nội dung này tới ES6 mới học
var newArr = [...oldArr];
//Deep copy
//- Sử dụng JSON: chuyển mảng thành json, sau đó chuyển ngược lại json về mảng

var json = JSON.stringify(oldArr);
var newArr = JSON.parse(json);
newArr[0] = "Hoàng An f8";

newArr[0] = "Hoàng An f8";
console.log(newArr);
console.log(oldArr);

//Hiểu nhầm VD2
var users = ["Item 1", "Item 2"];
function setData(data) {
  data[0] = "Item 3";
}

setData(users);
console.log(users);

//VD3:

var message = "F8";
function setMessage(data) {
  data = data.replace("8", "9");
  console.log(data);
}

setMessage(message);
console.log(message);

// đích = nguồn
//đích thay đổi => nguồn thay đổi => kiểu dữ liệu tham chiếu

var a = function () {
  console.log("getA");
};
var b = a;
var c = b;
c();

//vd 4: thêm 1 phần tử vào mảng con nếu tìm thấy email = user2@emai.com

var arr = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
];

// var arr = arr.map(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     item.push("Hello anh em");
//   }
//   return item;
// });
// console.log(arr);

// vd 4 sử dụng forEach

// var result = [];
// arr.forEach(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     result = item;
//   }
// });
// result.push("Hello anh em");
// console.log(arr);

//vd 4 sử dụng find

var result = arr.find(function (item) {
  return item.includes("user2@gmail.com");
});
result.push("Hello anh em");
// console.log(result);
console.log(arr);

//vd5
var arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
arr.length = 3; // getter, setter -> kỹ thuật này sẽ học sau,
console.log(arr);

//vd6: Tạo 1 mảng mới có số lượng phần tử xác định
var arr = Array(20);
console.log(arr);

//vd7 tạo 1 mảng mới chứa các số từ 1 đến 20
// [1,2,3,4,....,20]

var newArr = Array.from(Array(20).keys()).map(function (item) {
  return item + 1;
});
console.log(newArr);

//giải thích
//1. Array(number) --> trả về 1 mảng mới có số lượng phần tử number

// 2. keys() => trả về các index của mảng
console.log(Array(20).keys());

//3. Array.form  => ép kiểu về mảng
//Array.from
console.log(Array.from(Array(20).keys()));

//vd 8:

console.log(Array.from("a"));

function something() {
  console.log(arguments);
  //Array like object  --> object giống mảng có length, có key là số
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}
something(5, 10, 15, 20, 25, 30);
