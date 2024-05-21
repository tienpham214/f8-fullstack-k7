//Hàm trong Object
//1. Object.key()  -> trả về 1 mảng chứa các key trong object

var obj = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  age: 32,
};
var keys = Object.keys(obj);
console.log(keys);

Object.keys(obj).forEach(function (key) {
  console.log(obj[keys]);
});

//Kiểm tra object user có phần tử hay ko
var user = {};
if (Object.keys(user).length) {
  console.log("Có phần tử");
} else {
  console.log("Không có");
}

//2. Object.value() => trả về 1 mảng chứa các value của object

console.log(Object.values(obj));

//3. Object.entries -> trả về mảng 2 chiều chứa cả key và value
console.log(Object.entries(obj));

//4. Object.fromEntries => chuyển mảng 2 chiều thành object
// vd

var arr = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
];
var obj = Object.fromEntries(arr);
console.log(obj);

//5. Object.assign(target, source) => thực hiện việc copy object source và nối vào target, đồng thời trả về object mới sau khi nối

//vd2
var obj1 = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
};

var obj2 = {
  role: "Teacher",
  address: "Hà Nội",
};

//nối obj2 vào obj1
// var obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj3);

//Nối obj1 và obj2 và lưu vào obj3 ( ko làm thay đổi obj1, obj2), chỉ cần cho 1 mảng rỗng ban đầu thì obj1,2 sẽ ko bị thay đổ

var obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//vd: Chuyển thành string : category =1 & keyword = Khóa +học + Fullstack &status=true
var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};
console.log(query);

var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })

  .join("&")
  .replaceAll(" ", " + ");
console.log(queryString);
