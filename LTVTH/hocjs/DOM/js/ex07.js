//Event Object

// var btn = document.querySelector(".btn");
// var input = document.querySelector(".input");

// btn.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e.target);
//   console.log(`clientX = ${e.clientX}`);
//   console.log(`clientY = ${e.clientY}`);
//   console.log(`offsetX = ${e.offsetX}`);
//   console.log(`offsetY = ${e.offsetY}`);
// });

// //khi bấm chuột
// btn.addEventListener("mousedown", function (e) {
//   console.log(e);
// });

// //khi nhả chuột
// btn.addEventListener("mouseup", function (e) {
//   console.log(e);
// });

// //khi di chuột

// btn.addEventListener("mousemove", function (e) {
//   console.log(e);
// });

//click đúp chuột
// btn.addEventListener("dblclick", function (e) {
//   console.log(e);
// });

// sự kiện nhập ô input

// input.addEventListener("input", function (e) {
//   //   console.log(e);
//   var key = e.data;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });

// sự kiện khi nhả phím

// input.addEventListener("keyup", function (e) {
//   //   console.log(e);
//   var key = e.data;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });

// sự kiện thay đổi sau khi bấm ra ngoài ô input, so sánh với nôi dung input ban đầu

// input.addEventListener("change", function (e) {
//   //   console.log(e);
//   var key = e.data;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });

// sự kiện focus
// input.addEventListener("focus", function (e) {
//   //   console.log(e);
//   var key = e.data;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });

// // xem body với sự kiện nhấn phím bất kỳ
// document.body.addEventListener("keyup", function (e) {
//   console.log(e);
// });

//baitap 1: xây dựng sự kiện kéo và di chuyển nút đăng ký khóa học
// sử dụng dung 3 sự kiện: mouseup, mousedown, mousemove

var styleBtn = document.querySelector(".btn");
styleBtn.addEventListener("click", function () {
  var css = {
    cursor: "move",
  };
  Object.assign(styleBtn.style, css);
});

var btn = document.querySelector(".btn");
var isDragging = false;
var offsetX, offsetY;

btn.addEventListener("mousedown", function (e) {
  // Start dragging
  isDragging = true;

  // Calculate the offset
  offsetX = e.offsetX;
  offsetY = e.offsetY;

  // Add event listener for dragging
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  // Stop dragging
  isDragging = false;

  // Remove the event listener for dragging
  document.removeEventListener("mousemove", handleDrag);
});

var handleDrag = function (e) {
  if (isDragging) {
    // Calculate the new position
    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;

    // Apply the new position
    btn.style.position = "absolute";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
  }
};

// khống chế nút kéo trong màn hình: khi đến giá trị xác định cho về giá trị 0
