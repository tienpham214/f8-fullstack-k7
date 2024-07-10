//Async function
//Resolve promise ko cần dùng then (có nghĩa là nó ko có callback)
//Cách viết như đồng bộ(Tuần tự)
//Lưu ý hàm async luôn trả về 1 promise

const something = async () => {
  return "F8";
};
console.log(something());

//vd
const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "hoàng an",
        email: "hoangan@gmail.com",
      };

      //Nếu dữ liệu trả về thành công, thì gọi hàm resolve để trả về

      resolve(user);
      //Nếu thất bại thì gọi hàm reject để trả về lỗi
      //   reject("lỗi luôn");
    }, 3000);
  });
};

// const handleGetA = async () => {
//   const user = await getA();
//   console.log(user);
// };
// handleGetA();

(async () => {
  try {
    const user = await getA();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
})();

//Tìm hiểu thư viện json-server
// ôn lại http request và http response
//tìm hiểu hàm Fetch()  ; fetch api
