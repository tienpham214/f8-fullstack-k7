/*
Các phương thức của mảng
Mảng có nhiều phương thức hữu ích, bao gồm:

push(): Thêm một giá trị vào cuối mảng.
pop(): Loại bỏ một giá trị khỏi cuối mảng.
unshift(): Thêm một giá trị vào đầu mảng.
shift(): Loại bỏ một giá trị khỏi đầu mảng.
indexOf(): Trả về chỉ số của lần xuất hiện đầu tiên của một giá trị trong mảng.
lastIndexOf(): Trả về chỉ số của lần xuất hiện cuối cùng của một giá trị trong mảng.
slice(): Trả về một mảng con của mảng hiện tại.
concat(): Nối hai mảng lại với nhau.
sort(): Sắp xếp các giá trị trong mảng.
filter(): Lọc các giá trị trong mảng dựa trên một điều kiện.
map(): Áp dụng một hàm cho từng giá trị trong mảng và trả về một mảng mới.
*/
// const myArray = [1, 2, 3, 4, 5];

// // Thêm một giá trị vào cuối mảng
// myArray.push(6);
// console.log(myArray);

// // Loại bỏ một giá trị khỏi cuối mảng
// myArray.pop();

// // Thêm một giá trị vào đầu mảng
// myArray.unshift(0);

// // Loại bỏ một giá trị khỏi đầu mảng
// myArray.shift();

// // Trả về chỉ số của lần xuất hiện đầu tiên của giá trị 3 trong mảng
// const index = myArray.indexOf(3);

// // Trả về chỉ số của lần xuất hiện cuối cùng của giá trị 5 trong mảng
// const lastIndex = myArray.lastIndexOf(5);

// // Trả về một mảng con của mảng hiện tại, bắt đầu từ chỉ số 2 và kết thúc tại chỉ số 4
// const subArray = myArray.slice(2, 4);

// // Nối hai mảng lại với nhau
// const newArray = myArray.concat([6, 7, 8]);

// // Sắp xếp các giá trị trong mảng theo thứ tự tăng dần, sắp xếp theo ký tự a,b,c,chứ ko sắp xếp đc theo số
// Lưu ý với hàm sort  sẽ nhận vào 1 callback
// function callbackSort(a,b){
//     //a: phần tử sau
//     //b: phần tử trước
//Nếu hàm này trả về giá trị âm thì ==> tự động đổi chỗ

// myArray.sort();

// // Lọc các giá trị trong mảng dựa trên điều kiện là giá trị chia hết cho 2
// const filteredArray = myArray.filter((x) => x % 2 === 0);

// // Áp dụng một hàm cho từng giá trị trong mảng và trả về một mảng mới
// const mappedArray = myArray.map((x) => x * 2);

// var user = ["An", "Dũng", "Tâm", "Hạnh"];
// user.sort();
// console.log(user);

var numbers = [5, 1, 2, 100, 10];
numbers.sort(function (a, b) {
  //Sắp xếp tăng dần
  //Phần tử trước < phần tử sau
  //cần xử lý: nếu phần tử trước  > phần tử sau  => đổi chỗ
  console.log(`Trước = ${b}, Sau = ${a}`);

  if (b > a) {
    return -1000000;
  }
});
console.log(numbers);
//Sắp toán sắp xếp nổi bọt

//baitap 1: Sắp xếp mảng sau theo thứ tự tăng dần(theo tên)
// var users = [
//   "Tạ Hoàng An",
//   "Lưu Anh Quân",
//   "Lê Đức Nam",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
// ];
// var sortUsers;
// var user = sortUsers;
// var user1 = "Tạ Hoàng An";
// var user1 = user1.split(" ").slice(-1).join();
// console.log(user1);

// var user2 = "Lưu Anh Quân";
// var user2 = user2.split(" ").slice(-1).join();
// console.log(user2);

// var user3 = "Lê Đức Nam";
// var user3 = user3.split(" ").slice(-1).join();
// console.log(user3);

// var user4 = "Đặng Ngọc Sơn";
// var user4 = user4.split(" ").slice(-1).join();
// console.log(user4);

// var user5 = "Trần Công Lực";
// var user5 = user5.split(" ").slice(-1).join();
// console.log(user5);

// sortUsers = [user1, user2, user3, user4, user5];
// sortUsers.sort();
// console.log(sortUsers);

// //
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };

// users.sort(function (a, b) {
//   if (getFirstName(a) < getFirstName(b)) {
//     return -1;
//   }
// });
// console.log(users);

///Vòng lặp

var users = ["Item1", "Item2", "Item3", "Item4"];
//forEach(callback): duyệt từng phần tử của mảng

/*
Callback có 3 tham số
- value
- index
- array: mảng ban đầu
*/

var result = users.forEach(function (value, index) {
  console.log(value, index);
});

console.log(result);

//map(callback): duyệt qua từng phần tử của mảng ban đầu, trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
//giá trị từng phần tử của mảng mới sẽ là return của callback
// var newArray = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });

// console.log(newArray);

//filter(calback) : duyệt các phần tử mảng, sẽ trả về một mảng mới , giá trị phần tử của mảng mới sẽ là các phần tử mảng ban đầu, nếu callback return về truthy

// var newArray = users.filter(function (value, index) {
//   //   console.log(value, index);
//   //   if (index > 1) {
//   //     return true;
//   //   }

// //   return value;
// // });
// // console.log(newArray);

//baitap 2: Xóa khách hàng có email à customer2@gmail.com

// var customers = [
//   ["Customer 1", "customer1@gmail.com", 32],
//   ["Customer 2", "customer2@gmail.com", 28],
//   ["Customer 3", "customer3@gmail.com", 31],
//   ["Customer 4", "customer4@gmail.com", 29],
// ];

// customers = customers.filter(function (customer) {
//   return !customers.includes("customer2@gmail.com");
// });

// console.log(customers);

//Baitap3: tăng tuổi của khách hàng có email à customer2@gmail.com thêm 2 tuổi
//gợi ý dùng vòng lặp map

var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];

// customers = customers.filter(function (customer) {
//   return !customers.includes("customer2@gmail.com");
// });

// console.log(customers);

// customers = customers.map(function(customer)
// {
//     if(customer.includes("customer2@gmail.com"))
// {customer[2] += 2;
// }
// return customers;

// console.log(customers);

//baitap4:
/*
['An]
giải thích nếu status = true  => thêm value vào mảng data (kiểm tra trùng)
Nếu status = false => Xóa value
*/

var data = [];

function addData(value, status) {
  var addItem = function (item) {
    if (!data.includes(item)) {
      data.push(item);
    }
  };

  var removeItem = function (item) {
    data = data.filter(function (_item) {
      return item !== _item;
    });
  };
  if (status) {
    addItem(value);
  } else {
    removeItem(value);
  }
}
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);
