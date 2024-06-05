//Prototype : Object dùng để kế thừa các thuộc tính, các phương thức

// var user = {
//   name: "Hoàng An",
//   email: "hoangan@gmail.com",}

//   combineValue: function ()
//     //Nối tất cả các giá trị của các key thành 1 mảng
//     //this: Đại diện cho object hiện tại
//     // console.log("hello anh em");
//     // console.log(this.name);
//     // var array = Object.values(this);
//     // console.log(array);

//     Object.prototype.combineValue = function(){

//     var array = [];
//     var _this = this;
//     Object.keys(this).forEach(function (key) {
//       var value = _this[key];
//       if (typeof value !== "function") {
//         array.push(value);
//       }
//     });
//     return array;
//   },

// console.log(user);
// user.combineValue();

// var course = {
//   name: "Fullstack",
//   price: 1000,
// };

// console.log(course);
// console.log(course.combineValue());

// var fullname = "Hoàng an f8";
// console.log(fullname.message);

// var arr = []; // array
// var age : 32; //number
// var check = false; //boolean
// var getMessage = function (){};
// console.log();
// console.log(check.message);

// String.prototype.last = function (){
//   return this.split(" ").slice(-1).join();
// };

// Array.prototype.map2 = function (callback, thisArg) {
// 	// Lặp qua từng phần tử của mảng
// 	const newArr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		// Gọi hàm callback trên từng phần tử của mảng
// 		const result = callback.call(thisArg, this[i], i, this);
// 		newArr.push(result);
// 	}
// 	return newArr;
// };

//baitap1: Viết chương trình giống map, yêu cầu ko đc dùng phương thức xử lý mảng có sẵn, trừ .length

var users = ["User 1", "User 2", "User 3", "User 4"];
Array.prototype.map2 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var result = callback(value, i);
    newArr[newArr.length] = result;
  }
  return newArr;
};

var newArr = users.map(function (user, index) {
  return `<h3>${index + 1} - ${user}</h3>`;
});

console.log(newArr);
