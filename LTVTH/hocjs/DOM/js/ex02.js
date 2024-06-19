/*
Event: 
- Hành động từ phía người dùng tác động lên thẻ html
- Mặc định trình duyệt định nghĩa các event tương ứng với các thẻ html (Mỗi thẻ html sẽ có các event khác nhau)
- Nhiệm vụ của lập trình viên Js
==> Lắng nghe event từ phía người dùng để xử lý
*/

/*
Cú pháp lắng nghe sự kiện: 
element.tensukien = eventHandler (eventHandler là 1 hàm)

element.addEventListener(tensukien, listener) (listener là 1 hàm)
*/
var btn = document.querySelector(".btn");
// console.dir(btn);
// btn.onclick = function () {
//   console.log("Click me");
// };
// btn.addEventListener("click", function () {
//   console.log("Click me");
// });
// btn.addEventListener("click", function () {
//   console.log("Học DOM không khó");
// });

// btn.onclick = function () {
//   console.log("Học DOM không khó");
// };

// var items = document.querySelectorAll(".menu li");
// items.forEach(function (item) {
//   item.onclick = function () {
//     // console.log(item);
//     console.log(this);
//   };
// });
var startBtn = document.querySelector(".start-btn");
var btn = document.querySelector(".btn");
var count = 0;
var handleClick = function () {
  count++;
  console.log(count);
  if (count % 5 === 0) {
    btn.removeEventListener("click", handleClick);
  }
};
startBtn.addEventListener("click", function (e) {
  console.log("Đã bắt đầu");
  console.log(e); //event object
  btn.addEventListener("click", handleClick);
});
