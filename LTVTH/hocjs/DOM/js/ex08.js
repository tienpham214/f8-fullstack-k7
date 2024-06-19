//Event Object
//Tìm hiểu 2 hàm
//1. preventDefault()
//=> Ngăn các hành động mặc định của trình duyệt với các thẻ html, vô hiệu hóa vd chuột phải trên trình duyệt, để custom lại menu chuột phải trên trình duyệt

//vd1
var link = document.querySelector(".link");
link.addEventListener("link", function (e) {
  e.preventDefault();
  console.log(this.href);
});

//vd2 contextmenu: menu theo ngữ cảnh
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  //   console.log("ok");

  var x = e.clientX;
  var y = e.clientY;
  var css = {
    display: "block",
    top: y + "px",
    left: x + "px",
  };

  Object.assign(menu.style, css);
});

document.addEventListener("click", function () {
  var css = {
    display: "none",
  };
  Object.assign(menu.style, css);
});

menu.addEventListener("click", function (e) {
  //   console.log(e.target);
  e.stopPropagation();
  if (e.target.nodeName === "LI") {
    // console.log("click vào li");
    e.target.style.color = "yellow";
  }
});

//2. stopPropagation()  : chống hiện tượng nổi bọt của html, thằng con click thì thằng cha phải click
