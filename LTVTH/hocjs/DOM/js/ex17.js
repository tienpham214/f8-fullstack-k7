//Class

class Person {
  name = "TIENPV";
  emai = "tien@gmail.com";
  constructor() {
    console.log("Person Contructor");
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
var person = new Person();
console.log(person);

class User extends Person {
  constructor() {
    console.log("User Contructor");
    super();
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}
var user = new User();
// console.log(user.getInfo());
// console.log(user.getName());

//Tạo ra class kế thừa từ HTMLElement

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
}

//Đăng ký class HelloWorld thành 1 thẻ html

customElements.define("hello-world", HelloWorld); // phần này gọi là web component
