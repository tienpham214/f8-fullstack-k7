// //alert("học js ko khó");
// // confirm("chắc chưa");
// // console.log("ok chưa");

// // setTimeout(() => {
// //   console.log("Bắt đầu...");
// // }, 0);
// // console.log("HỌC JS KO KHÓ");

// // console.log("Step 1");
// // console.log("Step 2");
// // var a = 10;
// // setTimeout(function () {
// //   console.log("ok chưa");
// // }, 0);
// // console.log("Step 3");
// // console.log("Step 4");
// // console.log(a);

// // //ES6 ==> Promise sẽ cải thiện vấn đề của callback
// // //Callback => nhiều dẫn tới Callback Hell
// // //Promise => vẫn tồn tịa callback nhưng sẽ viết dưới dạng chaining
// // //object.method1().method2().method3();

// // //Các trạng thái của promise
// // // Pending: trạng thái mặc định của một Promise. Một Promise sẽ ở trạng thái pending cho đến khi giá trị của nó được biết trước.

// // // Fulfilled: trạng thái của một Promise khi giá trị của nó được biết trước. Một Promise sẽ ở trạng thái fulfilled khi giá trị của nó được biết trước.

// // // Rejected: trạng thái của một Promise khi giá trị của nó không được biết trước. Một Promise sẽ ở trạng thái rejected khi giá trị của nó không được biết trước.
// // //đỂ làm việc với promise thì ta có 2 bước
// // //1. khởi tạo object promise và đưa dữ liệu vào
// // //2. gọi promise và trả về kết quả

// // //vd:
// // // const getA = (callback) => {
// // //   setTimeout(() => {
// // //     const user = {
// // //       name: "hoàng an",
// // //       email: "hoangan@gmail.com",
// // //     };
// // //     callback(user);
// // //   }, 3000);
// // // };

// // // const getB = (callback) => {
// // //   setTimeout(() => {
// // //     const course = {
// // //       name: "fULLSTACK",
// // //     };
// // //     callback(course);
// // //   }, 3000);
// // // };

// // // getA((data) => {
// // //   console.log(data);
// // //   getA((data) => {
// // //     console.log(data);
// // //   });
// // // });

// // const getA = () => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const user = {
// //         name: "hoàng an",
// //         email: "hoangan@gmail.com",
// //       };

// //       //Nếu dữ liệu trả về thành công, thì gọi hàm resolve để trả về

// //       resolve(user);
// //       //Nếu thất bại thì gọi hàm reject để trả về lỗi
// //       //   reject("lỗi luôn");
// //     }, 3000);
// //   });
// // };

// // getA()
// //   .then((data) => {
// //     console.log(data);
// //     return "A";
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     return "B";
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("xong rồi");
// //   });

// // console.log(
// //   getA().then((data) => {
// //     console.log(data);
// //     return "A";
// //   })
// // );

// //nếu ko có return thì dữ liệu trả về sẽ undefine
// // console.log(
// //   getA()
// //     .then((data) => {
// //       console.log(data);
// //     })
// //     .then((data) => {
// //       console.log(data);
// //     })
// // );

// // const getB = () => {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       const course = {
// //         name: "Fullstack",
// //       };
// //       resolve(course);
// //     }, 1000);
// //   });
// // };

// // getA()
// //   .then((dataA) => {
// //     console.log(dataA);
// //     return getB();
// //   })
// //   .then((dataB) => {
// //     console.log(dataB);
// //   });

//BAITAP1

const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 4000,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => userId === id);
      resolve(user);
    }, 1000);
  });
};

const ids = [1, 3, 4];

const getTotal = () => {
  let total = 0;

  const promiseArr = ids.map((id) => getUser(id));

  return Promise.all(promiseArr).then((users) => {
    total = users.reduce((total, user) => total + user.salary, 0);
    return total;
  });
};

getTotal().then((data) => {
  console.log(data);
});

const calculateTotalSalary = (ids) => {
  const userPromises = ids.map((id) => getUser(id));

  Promise.all(userPromises).then((users) => {
    const totalSalary = users.reduce(
      (sum, user) => sum + (user ? user.salary : 0),
      0
    );
    console.log(totalSalary);
  });
};

calculateTotalSalary(ids);

//Promise.resolve()
//Promise.reject

//try catch : dùng để bắt lỗi
// custom lỗi để hiển thị dùng throw new Error
try {
  //   something();
  let a;
  if (!a) {
    throw new Error("Biến a phải có dữ liệu");
  }
} catch (e) {
  //   console.log(e.message);
  document.body.innerHTML = `<h3 style="color:red">${e.message} </h3>`;
} finally {
  console.log("Đã xong");
}
console.log("F8");
