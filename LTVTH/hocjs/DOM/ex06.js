//Dùng inline css => thêm trực tiếp css từ JS

var styleBtn1 = document.querySelector(".style-1");
var styleBtn2 = document.querySelector(".style-2");
var boxEl = document.querySelector(".box");
styleBtn1.addEventListener("click", function () {
  boxEl.style.color = "red";
});

styleBtn2.addEventListener("click", function () {
  boxEl.style.fontStyle = "italic";

  var css = {
    fontStyle: "italic",
    fontWeight: 700,
    backgroundColor: "gray",
    color: null, // gán null để loại bỏ thuộc tính màu, tương tự các thuộc tính khácz
  };
  Object.assign(boxEl.style, css);
});

//Bài tập: click vào button Style3 --> thêm ảnh nền, backgroud image với hình ảnh trong folder image

var styleBtn3 = document.querySelector(".style-3");
styleBtn3.addEventListener("click", function () {
  boxEl.style.backgroundImage = `url('./images/929-200x200.jpg')`;
});
