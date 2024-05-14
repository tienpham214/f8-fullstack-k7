//vÒNG LẶP

/*
- cú pháp trong lập trình
- cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định
- cú pháp: 
for (initial; condition, step){
    code
}


2 loại vòng lặp
- vòng lặp với số lần xác định trước
==> for

- vòng lặp với số lần ko xác định trước 

==> while, do while

*/

/*
vòng lặp for
for (initial; condition, step){
    code
}

*/

// for (var i = 1; i <= 10; i++) {
//   console.log(`Lần lặp thứ: ${i}`);
// }

// for (var i = 1; i >= 1; i--) {
//   console.log(`Lần lặp thứ: ${i}`);
// }

// for (var i = 10; i >= 1; i -= 2) {
//   console.log(`Lần lặp thứ: ${i}`);
// }

// var count = 0;
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`i = ${i} -j = ${j}`);
//     count++;
//   }
// }

//  S = 1 + 2 + 3 + .... + N
// var n = 10;
// var s = 0
// for (var i = 1; i <= n; i++) {
//   s += i;
//   console.log(`i = ${i}  ==> s = ${s}`);
// }
// console.log(s);

//  S = 1 + 1*2 + 1*2*3 + .... + 1*2*3*4..*n
var n = 5;

// --> 1 + 1*2 + 1*2*3 + .... + 1*2*3*4 + 1*2*3*4*5
//i    1   2      3                 4          5

var total = 0;
var tmp = 1;
for (var i = 1; i <= n; i++) {
  tmp *= i;
  total += tmp;
  console.log(total);
}
//Bổ sung thêm giải thích

//i = 1 --> giai thừa 1
// i =2  --> tmp =1*2
//i = 3 ---> tmp= 1*3
