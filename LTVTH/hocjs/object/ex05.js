//vd 3 về something.call()

var user = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  getInfo() {
    var _this = this;
    return {
      age: 32,
      getName: function () {
        // return _this.name;
        return this.name;
      },
    };
  },
};

// var name = user.getInfo().getName.bind(user)();
console.log(user.getInfo().getName.bind(user)());

// hàm bind làm thay đổi giá trị của object hiện tại của this

function something(name, email) {
  console.log(name, email);
  console.log(this.courseName);
  console.log(this.cousePrice);
}

var obj = {
  courseName: "Fullstack",
  cousePrice: 12000,
};
something.call(obj, "Hoàng An", "hoangan@gmail.com");

//vd4: something.apply()   => rải các mảng ra thành tham số

var arr = ["Hoàng An", "hoangan@gmail.com"];
something.apply(obj, arr);

something.call(obj, ...arr); // trong ES6 thì chỉ cần viết kiểu này

//vd5: Yêu cầu viết kế thừa thuộc tính sử dụng hàm call , user kế thừa thuộc tính của Person

function Person() {
  this.name = "Hoàng An";
  this.email = "hoangan@gmail.com";
  this.getName = function () {
    return this.name;
  };
  this.getEmail = function () {
    return this.email;
  };
}

function User() {
  Person.call(this); // gọi this để kế thừa thuộc tính user
  this.getInfo = function () {
    console.log(this.getName());
    console.log(this.getEmail());
  };
}
var user = new User();
user.getInfo();
console.log(user.name);

//func 1 => func 2 => func 3
