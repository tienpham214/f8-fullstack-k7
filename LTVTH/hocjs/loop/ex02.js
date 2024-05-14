// vòng lặp while
/* 
- Lặp với số vòng lặp ko xác định truóc

while (dieukien) {
    câu lệnh
}
*/

// var i = 0;
// var s = 0;
// while (i <= 10) {
//   console.log(i);

//   s += i;
//   i++;
// }
// console.log(s);

// var n = 1024;
// var count = 0; // số lần đếm
// // lấy n / 2  ->> khi nào ko chia hết thì dừng lại --> sẽ trả về số lượng phép chia (số lần chạy)
// while (n % 2 === 0) {
//   n /= 2;
//   count++;
// }

// console.log(count);

// Bài tập tìm kiếm từ trong đoạn văn bằng js, sử dụng while

// Vòng lặp do while: vẫn là chạy với số lần lặp ko xác định trước

// var a = 10;
// while (a < 10) {
//   console.log(a);
// }

// var a = 10;
// do {
//   console.log(a);
// } while (a < 0);

// Từ khóa break  --> sẽ dừng vòng lặp tại thời điểm mà ta mong muốn, mà ko cần vòng lặp chạy trong.

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break; // kết thúc vòng lặp, còn ko dùng break thì gán i = 10 để kết thúc
//   }
// }

// TỪ KHÓA continue --> bỏ qua vòng lặp để chạy lần lặp tiếp theo
for (var i = 1; i <= 10; i++) {
  console.log("a = " + i);
  if (i === 5) {
    continue;
  }
  console.log(i);
}
