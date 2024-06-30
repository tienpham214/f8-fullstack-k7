//

class User {
  //   name = "Hoàng An";
  name;
  email;
  #age = 32; // đang chế độ private thì ta thêm dấu # , muốn truy cập từ bên ngoài thì ta cần dùng phương thức
  #data = ["Item 1", "Item 2", "Item 3"];

  static message = "F8";
  constructor(name, email) {
    console.log("User Constructor");
    this.name = name;
    this.email = email;
  }
  #getName() {
    return this.name;
  }

  #getEmail() {
    return this.email;
  }

  #getAge() {
    return this.age;
  }

  getInfo() {
    return [this.#getName(), this.#getName(), this.#getAge()];
  }

  get latest() {
    return this.#data[this.#data.length - 1];
  }

  // push thêm item mới
  set latest(item) {
    this.#data.push(item);
  }
}

const user = new User("Hoang an", "hoangan@gmail.com");
console.log(user);
console.log(user.age);
// console.log(user.#getAge());
user.latest = "Item 4";
console.log(user.latest);

// element.innerHTML  ==> lấy nôi dung
// element.innerHTML = 'NOI DUNG' ==> CẬP NHẬT NỘI DUNG MỚI
