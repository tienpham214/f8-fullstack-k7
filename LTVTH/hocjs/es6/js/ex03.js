// Khái niệm về Destructuring (Array, Object)
// ý nghĩa của nó là phá vỡ cấu trúc array, object để truy cập vào các key và lưu vào các biến riêng biệt

// const user = {
//   username: "hoangan",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
//   age: 32,
// };

// const { username, email } = user;
// console.log(username, email);

//đổi tên email sang userEmail
// const { username, email: userEmail, age = 30 } = user;
// console.log(username, userEmail);
// console.log(age);

// muốn show ra các giá trị còn lại ta dùng ...rest
// const { username, email, ...rest } = user;
// console.log(rest);

// const users = [
//   "Hoàng An",
//   "hoangan@gmail.com",
//   32,
//   "Hà Nội",
//   { displayName: "Hoàng An F8" },
// ];
// const [username, email, age, address] = users;
// console.log(username);
// console.log(email);
// console.log(address);

// const [username, email, ...rest] = users;
// console.log(username, email, rest);

// const [, , , , { displayName }] = users;
// console.log(displayName);

//baitap 1: lấy email bằng Destructuring

const output = {
  displayName: "Hoàng An F8",
  emails: [
    {
      email: "hoangan@gmail.com",
    },
  ],
};

const {
  displayName,
  emails: [{ email }],
} = output;
console.log(displayName, email);

//vd show giá trí name trong một mảng

const users = [
  { id: 1, name: "Hoàng An 1" },
  { id: 2, name: "Hoàng An 2" },
  { id: 3, name: "Hoàng An 3" },
];

users.forEach(({ name }) => {
  console.log(name);
});
