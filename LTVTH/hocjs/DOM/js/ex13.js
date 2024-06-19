//load : (window) => khi các tài nguyên trên trang web tải xong (html, css, js, media..)
//DOMContentLoaded  => khi hình thành cây DOM

// var h1 = document.querySelector("h1");
// console.log(h1);
//js tải trước trong khi cây DOM chứa hình thành thì kết quả trả về null, nên cần phải có sự kiện bên dưới để thực hiện chạy

// var getSizeImage = function () {
//   var imgEl = document.querySelector("img");
//   var width = imgEl.width;
//   var height = imgEl.height;
//   console.log(width, height);
// };

//event fire

// document.addEventListener("DOMContentLoaded", function () {
//   //   var h1 = document.querySelector("h1");
//   //   console.log(h1);
//   console.log("DOM");
//   getSizeImage();
// });

//tình huống khác của load, chờ tải xong mới load ra được kết quả
// window.addEventListener("load", function () {
//   // //   var h1 = document.querySelector("h1");
//   // //   console.log(h1);
//   // console.log("Load");
//   // getSizeImage();
// });

//Baitap: khi load trang hiển thị nội dung loading....
// Sau khi loading xong thì hiển thị nôi dung trang web

var hidePreloader = function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000);
};

window.addEventListener("load", function () {
  hidePreloader();
});
