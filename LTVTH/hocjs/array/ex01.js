//Array:
/* 
Khai báo mảng


*/
// var myArray = [1, 5, 3, "Hello F8", true, false, null, undefined];
// console.log(myArray);

// //Kiểm tra số lượng phần tử
// console.log(myArray.length);

//Kiểm tra 1 biến có phải là mảng ko
// if (Array.isArray(myArray)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây ko phải mảng");
// }

// //Thêm 1 phần tử mới
// //cú pháp: tenbienmang[indexmoi] = giatri

// myArray[myArray.length] = "tien";
// myArray[myArray.length] = "viet";

//Sửa phần tử ==> xác đinh được index, index tồn tại thì ghi đè, còn index ko tồn tại thì ghi mới

// myArray[3] = "Hello F88";

// console.log(myArray);

//duyệt mảng (đoc mảng)
// console.log(myArray[0]);
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for  in
// for (var index in myArray) {
//   console.log(index, myArray[index]);
// }

// for   of

// for (var value of myArray) {
//   console.log(value);
// }

//Xóa phần tử trong mảng  => phải xác định được phần tử trong index
// var deleteIndex = 3;
// var newArray = [];
// for (var index in myArray) {
//   if (+index === +deleteIndex) {
//     continue;
//   }
//   newArray[newArray.length] = myArray[index];
// }
// console.log(myArray);
// console.log(newArray);

//Bài tập : Thêm 1 phần tử bất kỳ vào đầu mảng

// var newValue = "JS";
// var newArray = [newValue];
// for (var value of newArray) {
//   newArray[newArray.length] = value;
// }
// console.log(newArray);

// VD2: Yêu cầu xóa tất cả phần tử có mảng có chứa keyword, ko phân biệt chữ hoa, chữ thường

// var users = [
//   "Tạ Hoàng An",
//   "Nguyễn Tuấn Anh",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];

// var newUsers = [];
// var keyword;
// for (var index in users) {
//   var value = users[index];
//   if (value.toLowerCase().includes(keyword.toLowerCase())) {
//     console.log(value, index);
//   }
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

//VD3: tìm phần tử trong mảng và đổi chỗ phần từ đó với phần tử đầu tiên

// var numbers = [5, 2, 1, 9, 6];
// var max = numbers[0]; //giả định phần tử lớn nhất là phần tử đầu tiên
// var maxIndex; //lưu index tại vị trí lớn nhất

// for (var index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     maxIndex = +index;
//   }
// }

// var tmp = numbers[0];
// numbers[0] = max;
// numbers[maxIndex] = tmp;
// console.log(numbers);

//vd4: Yêu cầu chuyển thành họ tên hợp lệ: Tạ Hoàng An
var fullname = "tạ hoàng an";
var index;

var fullnameArr = fullname.split(" ");
var newName = "";
for (var index in fullnameArr) {
  var word = fullnameArr[index];
  var newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
  newName += newWord + " ";
}
newName = newName.trimEnd();
console.log(newName);
