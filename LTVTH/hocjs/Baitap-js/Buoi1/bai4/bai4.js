var a = 10;
var b = -20;
var result;

if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
  result = "Hai số có cùng dấu.";
} else {
  result = "Hai số không có cùng dấu.";
}

console.log(result);

//  khai báo hai biến a và b với giá trị tương ứng.
//  sử dụng câu lệnh if-else để kiểm tra dấu của hai số.
// Nếu cả hai số đều dương hoặc cả hai số đều âm, chúng ta gán chuỗi "Hai số có cùng dấu." cho biến result.
// Trong trường hợp còn lại, tức là một số dương và một số âm, chúng ta gán chuỗi "Hai số không có cùng dấu." cho biến result.
// Cuối cùng, in ra màn hình kết quả.
