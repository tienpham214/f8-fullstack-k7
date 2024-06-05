//vd2
var person1 = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  age: 32,
  getInfo: function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  },
};

// console.log(person1);
// console.log(person1.getInfo);

//Cấu trúc của Object
//- Có những thuộc tính
//- Có những phương thức
//- Giải pháp: tạo 1 function constructor -->
// Định nghĩa cấu trúc của Object
//Một số nguyên tắc của function constructor

/*
- Tên hàm phải là danh từ
- Đặt tên theo quy tắc PascalCase:  (Ký tự đầu của mỗi từ sẽ viết hoa)
vd: UserService, UserCourse, ResetPasswordService,,.....
*/

function Person(name, email, age) {
  //Thuộc tính
  this.name = name;
  this.email = email;
  this.age = age;
  this.a = "Học JS";

  //phương thức cần có
  this.getInfo = function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  };
  return 1;
}

// Tao Object từ constructor

Person.prototype.message = "Học JS";

var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
console.log(person1);

var person2 = new Person("Hoàng An 2", "hoangan2@gmail.com", 33);
console.log(person2);
console.log(person2.message);

//kiểm tra 1 object được tạo từ 1 hàm tạo nào ?

console.log(person1.constructor.name);

// cÁCH KIỂM TRA MẢNG
var users = ["User 1", "User 2", "User 3"];
if (users && users.constructor.name === "Array") {
  console.log("Đây là mảng");
}

//Thuộc tính tĩnh, phương thức tĩnh
/*
- ko phụ thuộc vào object
- truy cập trực tiếp từ constructor (hàm tạo)
vd:  Array.isArray(), Object.keys(), Object.values(),....

Tên Object.constructor.hamtao
*/

Person.message = "Hello a  e F8"; // thuộc tính tĩnh
//Phương thức tĩnh static method
Person.getMessage = function () {
  return "Học JS khó";
};

Person.something = function () {
  console.log(something);
  console.log(this);
  console.log(new this().a);
};

var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
console.log(person1);
console.log(person1.constructor.message);

//this trong phương thức tĩnh là constructor
//this trong phương thức thông thường là Object
