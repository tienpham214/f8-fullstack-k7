//Xử lý bật / tắt modal
var modal = document.querySelector(".modal");
var closeBtn = modal.querySelector(".close");
var overlay = modal.querySelector(".modal-overlay");
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  modal.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});
overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});
document.addEventListener("keyup", function (e) {
  //   console.log("nhả phím");
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
// document.addEventListener("keyup", function (e) {
//   if (e.key === "Enter") {
//     modal.classList.add("show");
//   }
// });

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  //Ngăn hành động mặc định của trình duyệt với thẻ html
  e.preventDefault();
  var nameEl = document.querySelector(".name");
  console.log(nameEl.value);
  nameEl.value = "";
});
