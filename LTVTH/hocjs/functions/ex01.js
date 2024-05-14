// functions:
/*
hàm là 1 cú pháp trong lập trình giúp tách các đoạn trong chương trình con trong 1 chương trình lớn để tái sử dụng
- Nó có thể hiện 1 chức năng (động từ)
- Đặt tên hàm theo quy tắc camelCase và sử dụng động từ
vidu:

sum, getTotal, getMessage, showUsers, makeMenu, buildMenuTree,....

Cú pháp: 
- Định nghĩa hàm:

function tenham(){
    nội dung hàm
}

function tenham(thamso1, thamso2, thamso3,....){
    nội dung hàm
}


=> Tham số là : parameters


- gọi hàm
tenham()
tenham(doiso1, doiso2, doiso3,....)

=> đối số : arguments
*/
//khi truyền theo hàm thì tuân thủ theo thứ tự, khi ko truyền đối số thì lấy mặc định, còn tryền vào thì nó thay thế
function showMessage(msg, type = "success") {
  console.log("Học JS cũng khó");
  console.log(msg, type);
  return 1;
  console.log("Hello"); // log này ko hoạt động do có hàm return trước đó
}
var a = showMessage("F8", "error"); // lời gọi hàm chủ động
console.log(a);
//js hoisting : tự động đẩy phần khai báo lên trước,tính năng của js

//hÀM có từ khóa return thì gọi là hàm có giá trị trả về, khi từ khóa return được gọi thì các đoạn code bên dưới return ko hoạt động

//a chia b, mà b khác 0

function division(a, b) {
  if (b !== 0) {
    return a / b;
  }
  return "ko tính được";
}
console.log(division(10, 2));
console.log(division(10, 0));

// Khái niệm về biến toàn cục: sử dụng ở phạm vị ngoài hàm
// Biến cục bộ: sử dụng phạm vi trong hàm

// var a = 0;
// function getNumber() {
//   return a;
// }

// console.log(getNumber());
// var a = 0;
// function getNumber() {
//   return a;
// }

// function setNumber(value) {
//   a = value;
// }
// setNumber(10);
// console.log(getNumber());

// function sum(a, b) {
//   var total = a + b;
//   return total;
// }

// console.log(sum(10, 20));
// console.log(total);

// trên thực tế trong 1 hàm thì có thể gọi các hàm khác

// function sum(a, b) {
//   return a + b;
// }
// function showResult() {
//   var total = sum(10, 20);
//   console.log(total);
// }
// showResult();

// Hàm ẩn danh. hay hàm ko tên, anonymous function
/* Hàm ẩn danh thì ko gọi được, ko định nghĩa được trừ khi mình gán vào 1 biến hoặc đưa vào tham số của hàm khác 


*/
//Expression function: khai báo trước thì mới dùng được
var showMessage = function () {
  console.log("Học lập trình khó");
};

showMessage();

// declaration function

function showNumber() {
  console.log("number");
}
showNumber();

// trường hợp 1

var getTotal = function sum(a, b) {
  return a + b;
};

console.log(getTotal(10, 20));
console.log(sum(10, 20)); // sẽ báo lỗi

//trường hợp 2

function sum(a, b) {
  return a + b;
}
var getTotal = sum;
console.log(getTotal(10, 20));
console.log(sum(10, 20));

//Hàm callback function; gọi lại, typeof callback ==="function" && callback();

function display(a) {
  console.log("Display");
  a();
}

display(function () {
  console.log("Hello F8");
});

// Hàm bị động

function handleLog() {
  console.log("hello f8");
}
display(handleLog);

//cặp ngoặc tròn viết ở đâu thì sẽ chạy và xử lý ở đấy

//Hàm setTimeout()  -> sẽ delay quá trình thực thi câu lệnh

/*
Hà setTimeout sẽ có 3 tham số là callback, time, args

*/

setTimeout(
  function (a, b, c) {
    console.log("Hello F8", a, b, c);
  },
  1000,
  "a",
  "b",
  "c"
); // SAU 1 s giây hiển thị kết quả

//

function max(a, b) {
  console.log(arguments); // arguments sẽ lấy giá trị đối số dưới
  console.log(a, b);
}

max(5, 10, 15, 20, 25, 30);

//Rest parameter : tham số còn lại
// sử dụng ...args để lấy giá trị còn lại, truyền vào biến args

function max2(a, b, ...args) {
  console.log(a, b);
  console.log(args);
}
max2(5, 10, 15, 20, 25, 30);
