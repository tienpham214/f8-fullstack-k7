// $ npm -v
// 9.5.1

// $ node -v
// v18.16.0

// cai json
// $ npm install -g json-server@0.17.4

// kiểm tra json có hoạt động hay ko
// $ json-server -v

// Lệnh chạy json-server trên localhost. Tại thư mục chứa folder chạy json bất kỳ: kích vào đường dẫn trên window, nhập CMD, để mở ra cửa sổ terminal win,nhập tiếp lệnh chạy bên dưới
//  json-server db.json --watch

//Các cách gọi api từ JS
// cách 1 là sử dụng fetch()
//cách 2 là sử dụng XMLHttpRequest()
//cách 3 là thư viện jquery ajax, axios, node fetch,....

const userApiUrl = `http://localhost:3000/users`;

// const getUsers = fetch(userApiUrl);

// console.log(getUsers);

// fetch(userApiUrl)
//   .then((response) => {
//     //response.text () và response.json() ==> promise có chứa response body từ server
//     //   console.log(response.text());
//     // return response.text();
//     return response.json();
//   })
//   .then((data) => {
//     // data = JSON.parse(data);
//     console.log(data);
//   });

// //để lấy ra danh sách
// const getUsers = async () => {
//   const response = await fetch(userApiUrl);
//   const data = await response.json();
//   console.log(data);
// };
// getUsers();

//vd
const addUser = async (data) => {
  const response = await fetch(userApiUrl, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      //"Content-Type: "application/x-www-form-urlencoded"
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

// addUser({
//   name: "User 4",
//   email: "user4@gmail.com",
//   status: "active",
// });

//sửa user
const updateUsers = async (id, data) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      //"Content-Type: "application/x-www-form-urlencoded"
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

// updateUsers(1, {
//   name: "User 34",
//   email: "user4444@gmail.com",
// });

//xóa user
const deleteUser = async (id) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "DELETE",
  });
  console.log(response);
};

deleteUser(1);

//urlencoded : name=hoangan@email=hoangan.gmail.com&status=active

//CRUD:
// C:CREAT
// R:READ
// U: UPDATE
// D:DELETE
