//Biểu thức = toán tử  + toán hạng
// s = a + b * c
// toán hạng là s, a,b,c
// toán từ là =, +, *
//1. Toán tử số học
/* Các phép toán +, - , *, /

% là chia lấy dư
** là lũy thừa
++ là tăng lên 1 đơn vị
-- là giảm đi 1 đơn vị

*/

// var a = 10; //a là cơ số
// var b = 3; // b là số mũ
// var c = a ** b;
// console.log(c);

// Ko được chia cho số 0
// var a = 10;
// var b = 2;
// var c = a / b;
// console.log(c);

// var a = 1;
// var b;
// // a++;
// // a--;
// // ++a;
// // var b = a++;
// // var b = ++a;
// // console.log(a);
// // console.log(b);

// var count = 1;
// var total = count++ + ++count + count++; // tức là count++ sau thì tăng đơn vị nên bằng 2; còn ++count là cộng sau nên chỉ bằng 1
// // l.count = 2; total = 1
// //2. count = 3; total = 4
// //3. count = 4; total = 7

// // var total = ++count; // total sẽ bằng 2
// // var total = count++; //total sẽ bằng 1
// // var total = count++ + ++count;
// console.log(total);

//2 Toán tử gán

// var a = 10;
// // a = a + 10;
// // a += 10;
// // a -=10;
// // a *= 10;
// // a /= 10;
// a **= 10;
// console.log(a);

//3. tOÁN TỬ SO SÁNH

/*
>, <, >=, <=, ==, ===, !=, !==

=> lUÔN trả về kiểu dữ liệu logic (boolean): true, false
*/

// var a = 10;
// var check = a >= 10;// trả về kết quả giá trị đúng
// var check = a == 10; // trả về kết quả giá trị đúng, so sánh về giá trị
// var check = a === "10";// trả về kết quả giá trị sai, so sánh cả giá trị và kiểu dữ liệu

// var check = a !== "10"; // so sánh khác cả kiểu dữ liệu và giá trị
// console.log(check);

//4. Toán tử lý luận (kết hợp)

/*
&&  --> kết hợp and
||  --> kết hợp or
!  --> kết hợp not
Thứ tự ưu tiên, ngoặc tròn  --> and --> or --> not
*/
// var a = 10;
// var check = a >= 5 && a <= 15; // kêt quả đúng
// var check = !(a >= 5 && a <= 15); // kết quả ra sai, vì nó phủ định của giá tri đúng

// var check = a < 0 || (a >= 5 && a <= 15); // do thứ tự ưu tiên trong ngoặc tròn nên giá trị log check trả về là true
// console.log(check);

// var b = 5;
// if (10 === b) {
// }
// console.log(b);

//5. Toán tử 3 ngôi
//Cú pháp: dieukien ? giatridung : giatrisai

// var a = 10;
// var b = a >= 10 ? "f8" : "TIEN"; // nếu b đúng thì log ra giá trị đúng là f8, còn nếu sai thì hiện giá trị sai là TIEN
// console.log(b);

// var a = 10;
// var total = 5 + 10 + a >= 10 ? 10 : 5 + 2; // kết quả trả về 10, theo giá trị đúng

// var total = 5 + 10 + (a >= 10 ? 10 : 5) + 2; // là 5 + 10 + 10 +2 =27, vì ưu tiên tính giá trị trong ngoặc
// console.log(total);

//6. Toán tử nullish (??)
// sử dụng dấu ??
//cú pháp: bien ?? giatri
// cách hoạt động: nếu bien  !== undefined và bien !== null lấy biến, ngược lại, TỨC LÀ BIẾN KHÁC undefined và khác null
//  bien lấy giá trị biến,

// var x = 10; // kết quả ra 10
// var x = null; // kết quả ra F8
// var result = x ?? "F8";
// console.log(result);

// Viết lại toán tử nullish bằng toán tử 3 ngôi

//Cú pháp: dieukien ? giatridung : giatrisai

var x = 10;
var result = x !== null && x !== undefined ? x : "F8"; // đáp ứng điều kiện thì lấy giá trị biến, còn sai thì lấy giá trị sai
// var result = x === null || x === undefined ? "f8" : x;
console.log(result);
