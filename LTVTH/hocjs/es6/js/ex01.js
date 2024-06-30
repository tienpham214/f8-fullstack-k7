//ES6: Phiên bản Javascript được cập nhật năm 2015
//Biến: const, let
//==> Block Scope

//Global Scope
// var a;

// function message() {
//   //Function Scope
//   var b;
//   if (b) {
//     //Block Scope
//     console.log("hello");
//   }
//   for (var i = 1; i <= 10; i++) {
//     //Block Scope
//   }
// }

// var a = 10;
// if (a >= 5) {
//   let b = 20;
// }
// console.log(b);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);

// Trong 1 scope chỉ được phép khai báo let 1 lần
// let a = 10;
// a = 20;

// const a = 10;
// a = 20;

// function getMessage() {
//   console.log("Học lập trình không khó");
// }

// function getMessage() {
//   console.log("Học lập trình rất khó");
// }

// getMessage();

// const getMessage = function () {
//   console.log("Ahihi");
// };
// const getMessage = function () {
//   console.log("Bhihi");
// };

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};

user.name = "Hoàng An F8";

console.log(user);

// const a;

//Arrow Function
//Destructuring
//Spread
//Object Literal Enhanced
//Class
