//các bước định nghĩa sự kiện
/* 
- Bước 1: xác định tên sự kiên 
- Bước 2: xác định element có sự kiện đó
- Bước 3: xác định thời điểm gửi sự kiện(dispatch), có kèm theo dữ liệu ko?
- Bước 4: lắng nghe sự kiện

*/

// var finishEvent = new Event("finish");
// var input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//   var value = e.target.value;
//   console.log(value);

//   if (+value === 100) {
//     this.dispatchEvent(finishEvent);
//   }
// });

// input.addEventListener("finish", function () {
//   console.log("đã xong");
// });

HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var input2 = document.querySelector(".input-2");
input2.addEventListener("finish", function (e) {
  console.log("input 2 đã hoàn thành ");

  console.log("vị trí đầu tiên", e.initialRate);
});

var quantity = document.querySelector(".quantity");
var minus = quantity.querySelector(".minus");
var plus = quantity.querySelector(".plus");
var input = quantity.querySelector("input");

var changeEvent = new Event("change");
plus.addEventListener("click", function () {
  input.value++;
  input.dispatchEvent(changeEvent);
});

minus.addEventListener("click", function () {
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
  input.dispatchEvent(changeEvent);
});
input.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
});

//trigger event : tác động 1 sự kiện nào đó mà ko phụ thuộc vào con người, hành động kiểu tự click

/*
1. Dùng các hàm có sẵn
- click();
- focus();
- submit();

2. Dùng dispatchEvent
*/

input.focus(); //dispatch focus
// //vidu tự click vào dấu +
// setInterval(function () {
//   plus.click(); //dispatch click
// }, 500);
