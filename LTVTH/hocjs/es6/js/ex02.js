//Arrow function, dùng mũi tên thay thế cho function

// const getMessage = (mgs) => {
//   console.log("HỌC LẬP TRÌNH KO KHÓ", mgs);
// };
// getMessage("F8");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const name = "HOÀNG AN";
// const email = "hoangan@gmail.com";
// const getUser = () => ({ name: name, email: mail });
// console.log(getUser);

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];
// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(1));

document.body.innerHTML = `${users
  .map((user) => `<h3>${user.name}</h3>`)
  .join("")}`;

/*
- Không nên dùng để làm method của object bời vi ko bind được this
- Không được dùng để tạo constructor
- Không có object prototype
- Không bind được this arguments
*/

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

//vd về object

const user = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",

  getInfo: function () {
    return {
      age: 32,
      getAge: () => {
        console.log(this);
        return this.age;
      },
    };
  },
};
console.log(user.getInfo().getAge());
