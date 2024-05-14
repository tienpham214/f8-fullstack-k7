/*
Closure: định nghĩa hàm trong 1 phạm vi khác và có thể truy cập các biến ở phạm vị chứa nó
- Trong JS thì tất cả các hàm đều là closure

*/

// var i = 20;
// function display() {
//   console.log("display");
//   var x = 10;
//   function someThing() {
//     console.log("someThing");
//     console.log(x);
//     console.log(i);
//   }
//   someThing();
// }
// display();

//  vd 2
// var a = 10;
// function getMessage() {
//   console.log("getMessage");
// }
// console.log(window);
// window.getMessage();
// window.console.log(window.a);

// window.f8 = {
//   showMessage() {
//     console.log("học lập trình k khó");
//   },
// };
// window.console.log(f8.showMessage());

// vd 3
// function display() {
//   return function getMessage() {
//     return "Học lập trình k khó";
//   };
// }
// console.log(display()());

//vd 4

// function display() {
//   function getMessage() {
//     return "Học lập trình k khó";
//   }
//   return getMessage;
// }

// var func = display();
// console.log(func());

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20));

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// var add = sum(10);
// var result = add(20);
// console.log(result);

//3 IEFE
/*
 Cú pháp của một IIFE thường là (function() { // code })(); trong JavaScript.

*/

// (function () {
//   console.log("hỌC LẠP TRINH KO KHO");
// })();

//4 giải thuật đệ quy
/* Giải thuật đệ quy: Đệ quy là một kỹ thuật trong lập trình mà một hàm gọi chính nó để giải quyết một vấn đề. Giải thuật đệ quy thường được sử dụng để giải quyết các vấn đề được chia nhỏ thành các phần nhỏ hơn và giải quyết các phần đó một cách đệ quy. Các giải thuật đệ quy thường được triển khai thông qua việc sử dụng các hàm đệ quy, trong đó hàm gọi chính nó với các đối số khác nhau mỗi lần gọi để tiến hành giải quyết vấn đề.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Kết quả sẽ là: 120 (5!)


Giải thuật đệ quy:
Dòng 2: Định nghĩa hàm factorial nhận một tham số n.
Dòng 3-7: Kiểm tra nếu n là 0 hoặc 1 thì trả về 1, ngược lại thực hiện đệ quy bằng cách gọi lại factorial với n - 1.
Dòng 9: Gọi factorial(5) để tính giai thừa của 5.


*/

// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// VD Tính tổng: 1 + 2 + 3 + ..... + N (dùng đệ quy)

function getTotal(n) {
  //ko dùng vòng lăp
  if (n === 0 || n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
}

var total = getTotal(10);
console.log(total);

//vd 5

function fibonaci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
console.log(fibonaci(5));
