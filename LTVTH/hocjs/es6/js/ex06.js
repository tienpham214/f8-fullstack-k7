//Javascript module

const { product } = require("../modules/module3");

// common JS => chỉ chạy trên node JS
// es6 module : chạy đc cả trên client và server
// amd module
// console.log(ex06);

//import dữ liệu từ module1.js
// const { a, b } = require("../modules/module1");
// console.log(a);
// console.log(b);

import ahihi, { a as a1, b, getMessage, product } from "../modules/module2.js";
console.log(a1, b);
getMessage();
console.log(ahihi);
console.log(product);

/*
app.js => modules => 10 file
app.js  => import 10 lần
giải pháp :
trong folder modules => tạo file index.js  => import 10 file và export để app.js sử dụng 
*/
