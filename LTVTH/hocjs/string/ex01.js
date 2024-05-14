// //String:
// /*
// chuỗi bao gồm các ký tự được đặt trong dấu nháy
// chuỗi là kiểu dữ liệu nguyên thủy
// */

// var a = "học lập trình ko khó";
// console.log(a);

// //Kiểm tra 1 biến của 1 hàm có phải kiểu chuỗi ko thì dùng từ khóa typeof

// if (typeof a === "string") {
//   console.log("đây là chuỗi");
// }

// //ép kiểu dữ liệu khác về chuỗi

// var b = 10;
// b = b + "";
// console.log(typeof b);

// /*

// Các kiểu dữ liệu nguyên thủy sẽ bọc 1 đối tượng, trong đối tượng đó sẽ có các hàm xử lý với kiểu dữ liệu tương ứng
// */

// console.log(a.length);
console.log(String.prototype);

//vd 2
var str = "hỌC f8 Hoc lap trinh tai F8";
//1. length : kiểm tra đọ dài ký tự

console.log(str.length);

//2. charAt trả về ký tự theo index

console.log(str.charAt(1));

//3 charCodeAt(): trả về mã ASCII của ký tự theo index

console.log(str.charCodeAt(0));

//4. concat() : nối chuỗi

console.log(str.concat("A", "B", "C"));

//5. includes()  : tìm chuỗi con trong chuỗi cha, nếu tìm thấy thì trả về true, và ngược lại thì là false

console.log(str.includes("F8"));

//6. indexOf() : tìm chuỗi trong chuỗi cha, nếu tìm thấy trả về index đầu tiên tìm được , ngược lại trả về  -1

console.log(str.indexOf("F8"));

//7. lastIndex0f():

console.log(str.lastIndexOf("F8"));

//8. slice(start, end): CẮT chuỗi từ index đến end-1
console.log(str.slice(0, 3));

console.log(str.slice(5)); // cắt giá trị từ thứ 2 đến 5, bỏ qua giá trị đầu

console.log(str.slice(-5)); // cắt ngược lại từ cuối lên bỏ giá trị cuối

//9. replace(tukhoa, thaythe): thay thế từ khóa đầu tiên tìm được

console.log(str.replace("F8", "F88"));

//10/ replaceAll(tukhoa, thaythe):  thay thế tất cả

console.log(str.replaceAll("f8", "F88"));

//11. split(): tách chuỗi thành mảng, dựa vào ký tự phân cách

console.log(str.split(" "));

//12. startsWith : kiểm tra chuỗi bắt đầu, nếu tìm thấy thì là true, sai là false

var pathname = "/khoa-hoc/fullstack";
console.log(pathname.startsWith("/khoa-hoc"));

//13. endsWith:  kiểm tra chuỗi bắt đầu, nếu tìm thấy thì là true, sai là false

var pathname = "/khoa-hoc/fullstack";
console.log(pathname.endsWith(".html"));

//14. toLowerCase(): chuyển chữ sang chữ thường
//15. toUpperCase(): chuyển chữ sang chữ hoa
//16.  trim(): loại bỏ khoảng trắng đầu và cuối chuỗi

var str = " HỌC LẬP TRÌNH  ";
console.log(str);
console.log(str.trim);

//17. trimStart(): loại bỏ khoảng trắng đầu chuỗi
//18: trimEnd(): loại bỏ khoảng trắng cuối chuỗi

// 19. match(): cắt chuỗi dựa vào biểu thức chính quy

var content = `Hello anh em F8. Số điện thoại của tôi là :0984458829, thêm số nữa là 0984458839`;
var pattern = /0\d{9}/g;
var phones = content.match(pattern);
console.log(phones);
