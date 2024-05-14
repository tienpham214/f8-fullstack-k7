//Câu lệnh switch case
/*
- Áp dụng khi có nhiều nhánh
- Có nhiều điều kiện hoặc (||)
- Biểu thức logic là so sánh bằng (===)
*/

// var action = "update";
// switch (action) {
//   case "add":
//   case "create":
//   case "insert":
//     console.log("Thêm");
//     break;
//   case "update":
//   case "edit":
//     console.log("Cập nhật");
//     break;
//   case "delete":
//   case "remove":
//   case "destroy":
//     console.log("Xóa");
//     break;
//   default:
//     console.log("Danh sách");
//     break;
// }

// if (action === "add" || action === "create" || action === "insert") {
//   console.log("Thêm");
// } else if (action === "edit" || action === "update") {
//   console.log("Cập nhật");
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//   console.log("Xóa");
// } else {
//   console.log("Danh sách");
// }

/*
Viết chương trình hiển thị số ngày trong 1 tháng cho trước
Input: 
month = 11;
Output: 
Tháng 11 có 30 ngày

Quy ước: 
Tháng có 31  ngày: 1, 3, 5, 7, 8, 10, 12
Tháng có 30 ngày: 4, 6, 9, 11
Tháng có 28 hoặc 29 ngày: 2

Lưu ý: Kiểm tra điều kiện của tháng
- Số nguyên
- Từ 1 đến 12
*/
var month = 2;
if (month % 1 === 0 && month >= 1 && month <= 12) {
  switch (month) {
    case 2:
      console.log("Tháng " + month + " có 28 hoặc 29 ngày.");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("Tháng " + month + " có 30 ngày.");
      break;
    default:
      console.log("Tháng " + month + " có 31 ngày.");
      break;
  }
} else {
  console.log("Nhập sai tháng.");
}
