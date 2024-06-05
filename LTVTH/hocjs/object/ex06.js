console.dir(Object);

var user = {
  name: "Hoàng AN",
  email: "hoangan@gmail.com",
};
console.log(user);

var user2 = Object.create(null);
user2.name = "Hoàng An";
user2.email = "hoangan@gmail.com";
console.log(user2);

//Object.creat còn có tác dụng là kế thừa prototype

//tham chiếu
//vd1

// var a = {
//   name: "Hoàng AN",
//   email: "hoangan@gmail.com",
// };

// // var b = a;
// //shadow copy
// var b = Object.assign({}, a);
// b.name = "Hoàng an F8";
// console.log(a);
// console.log(b);

// //CÁCH 2 sử dụng spreat
// var b = { ...a };
// b.name = "Hoàng an F8";
// console.log(a);
// console.log(b);

// // deep copy là JSON

// var b = JSON.parse(JSON.stringify(a)); // chuyển object thành json thì nó sẽ thực hiên copy địa chỉ mới
// b.name = "Hoàng an F8";
// console.log(a);
// console.log(b);

// //baitap1 Hiển thị dữ liệu mảng bên dưới vào table, cho sẵn table user 1, dữ liệu động user còn lại vào bảng

// var users = [
//   {
//     name: "User 1",
//     email: "user1@gmail.com",
//   },
//   {
//     name: "User 2",
//     email: "user2@gmail.com",
//   },
//   {
//     name: "User 3",
//     email: "user1@gmail.com",
//   },
//   {
//     name: "User 4",
//     email: "user4@gmail.com",
//   },
// ];

// var eamil = "user2@gmail.com"

// var user = users.find(function(user){
//     return user.email === email;
// });
// user.name = "user 2 update ";
// //Yêu cầu tìm user có email trên và sửa tên
// document.write(` <table width=" 100%" border=" 1">
// <thead>
//   <tr>
//     <th width="5%">STT</th>
//     <th>Tên</th>
//     <th>Email</th>
//   </tr>
// </thead>
// <tbody>
// ${users.map(function(user, index) {
//     return `<tr>
//     <td>${index +1 } </td>
//     <td>${index +1 } </td>
//     <td>${index +1 } </td>`

// }
// join.user;
// }
//   <tr>
//     <td>1</td>
//     <td>Hoàng An</td>
//     <td>hoangan@gmail.com</td>
//   </tr>
// </tbody>
// </table>`);

/*
// Note:
1. String
2. Number
3. BigInt
4. Boolean
5. Symbol
6. undefined
7. null
8. Object

*/

var a = { value: 1 };
var b = { value: 1 };
var c = a;

JSON.stringify(a) = 

console.log(a === b);
console.log(a === c);
