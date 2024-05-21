//Object : đặc tả về 1 đối tượng củ thể
//vd con người, người dùng, sản phẩm,...

/*
Cấu tạo bở 
- Thuộc tính (biến)
- Phương thức (hàm)

Cú pháp:
var tenObject=  { key1:value1,
key2:value2,

}
*/
//Object literal
var user = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  age: 32,
  "address-a": "Hà Nội",
};
console.log(user);
console.log(user.name);
console.log(user["age"]);
console.log(user["address-a"]);

//vd2

user.address = "Hà Nội"; //Thêm mới giá trị đối tượng mới
user.name = "Tiến"; // Sửa giá trị cũ thành giá trị mới
delete user.age;
console.log(user);

//vd3: duyệt qua từng phần tử

for (var key in user) {
  console.log(user[key]); // computed key
}

//Hàm tạo của object là Object

console.dir(Object);

//baitap 1: nối 2 object với nhau
var obj1 = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
};
var obj2 = {
  age: 32,
  role: "Teacher",
};

var obj3 = {};

for (var key in obj1) {
  obj3[key] = obj1[key];
}

for (var key in obj2) {
  obj3[key] = obj2[key];
}

console.log(obj3[key]);

// baitap2: kiểm tra 1 biến có phải mảng hay ko ?

var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("là object");
}

if (a && a.constructor.name === "Object") {
  console.log("là object");
}
