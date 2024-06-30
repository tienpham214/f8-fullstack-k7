//Spread
// const arr1 = ["Item 1", "Item 2", "Item 3"];
// // thêm ...arr1 để các phần tử trong mảng sẽ ngang hàng nhau
// const arr2 = ["Item 4", ...arr1, "Item 5", "Item 6"];

// console.log(arr2);

// //vd: thêm Todo 4 vào mảng todos và lưu vào biến mới
// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// const newTodos = [...todos, "Todo 4"];
// console.log(newTodos);
// console.log(todos);

// //vd cập nhật email và lưu object vào biến mới
// const form = {
//   name: "hoàng an",
//   email: "hoangan@gmail.com",
// };
// //khai báo biến mới, sau đó sẽ dải dữ liệu bằng ...form, thêm dữ liệu cần vào mảng mới
// const newForm = { ...form, email: "contact@fullstack.edu.vn" };
// console.log(newForm);

// const something = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };

// const data = ["Data 1", "Data 2", "Data 3"];
// //something(...data);
// something.apply(null, data);

//Enhanced Object Literal

// const name = "hoàng an";
// const email = "hoangan@gmail.com";
// let address;
// const user = {
//   name,
//   email,
//   address,
// };
// console.log(user);

//bai tap 3:

//trường hợp 1: chỉ muốn truyền name
//something("Hoàng An")

//trường hợp 2: chỉ muốn truyền email
//something(undefine, "hoangan@gmail.com")

//xây dựng hàm hỗ trợ name arguments (áp dụng Destructuring và enhanced)

const something = ({ name, email, address }) => {
  console.log(`Name: ${name}`);
  console.log(`Email : ${email}`);
  console.log(`Address: ${address}`);
};

something({ email: "hoàng an" });
const address = "Hà Nội";
something({ address });
