// Biến là gì
//khai báo biến, đặt tên theo quy tắc camelCase

var user;
var customer;
var userId, username, email, userEmail;
var course = "Tôi chưa học",
  age = 32;

//lưu Ý nếu 1 biến đc khai báo mà ko set giá trị thì gọi là undefined, ko xác định

console.log(user);
console.log(course);

//Hiển thị nội dung lên trình duyệt

// document.write('Hello ae F8');
// document.write("Hello ae F8");
//cách khác dùng dom

// document.body.innerHTML="học js không khó";

//luu ý nội dung hiển thị lên trình duyệt có thể là HTML
document.write("<h2>Xin chào</h2>");

// document.write(course);
// var wellcome = "<h2> Khóa học" + course + "tại F8</h2>";
// wellcome = wellcome + "<h3>FFFFFFFFFFFFF</h3>";

//kiểu backtick thì dùng dấu huyền thay đấu nháy kép: ``  , trong dấu huyền có thể nối thêm biến khi thêm $(biến)

var wellcome = `<h2> Khóa học ${course} full tại F8</h2>
<h3>TIEN</h3>`;

document.write(wellcome);

//lưu ý biến trong JS có 2 cách khai báo khác là : let, const  --> học sau
// ko cần khai báo kiểu dữ liệu, js là ngôn ngữ nhận kiểu dữ liệu
