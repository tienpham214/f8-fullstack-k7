var email = "hoangan.web@gmail.com";

//viết chương trình xử lý trả về username của email

var index = email.indexOf("@");
var username = email.slice(0, index);
console.log(username);

//vd2 Viết 1 hàm kiểm tra 1 chuỗi xem có phải chữ hoa hay ko?

function isUpper(str) {
  return str === str.toUpperCase();
}
console.log(isUpper("TẠ HOÀNG AN"));

//vd innnerHTML

var content = `<h1>Học lập trình cũng khó. Học lập Trình cũng khó</h1>`;
var keyword = "trình";
// document.body.innerHTML = content;

// var position = content.toLowerCase().indexOf(keyword.toLowerCase());

var content = `<h1>Học lập trình cũng khó. Học lập Trình cũng khó</h1>`;
var keyword = "trình";
var regex = new RegExp(keyword, "gi");
content = content.replace(
  regex,
  '<span class="highlight">' + keyword + "</span>"
);
document.body.innerHTML = content;
