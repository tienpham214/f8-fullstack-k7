// Mảng để lưu trữ thông tin người dùng đã đăng ký dưới dạng chuỗi
const data = [];

// Hàm tạo đối tượng người dùng dưới dạng chuỗi
function createUserString(name, password, email) {
  return `${name},${password},${email},user`; // Chuỗi định dạng: name,password,email,role
}

// Hàm để đăng ký người dùng mới
function handleRegister(name, password, email) {
  // Kiểm tra xem thông tin có đầy đủ hay không
  if (!name || !password || !email) {
    console.error("Thông tin không đầy đủ. Vui lòng kiểm tra lại.");
    return;
  }

  // Tạo đối tượng người dùng mới dưới dạng chuỗi
  const newUserString = createUserString(name, password, email);

  // Thêm người dùng mới vào mảng data
  data.push(newUserString);

  // Trả về mảng chứa tất cả người dùng đã đăng ký
  return data;
}

// Hàm để đăng nhập
function handleLogin(email, password) {
  // Duyệt qua mảng data để tìm người dùng có email và password khớp
  for (var i = 0; i < data.length; i++) {
    const userArray = data[i].split(",");
    const [name, userPassword, userEmail, role] = userArray;

    if (userEmail === email && userPassword === password) {
      // Nếu tìm thấy, trả về thông tin người dùng đó dưới dạng đối tượng
      return {
        name: name,
        password: userPassword,
        email: userEmail,
        role: role,
      };
    }
  }
  // Nếu không tìm thấy, trả về thông báo lỗi
  console.log("Thông tin đăng nhập không hợp lệ");
  return null;
}

// Ví dụ sử dụng
var dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
console.log(dataRegister1);

var dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
console.log(dataRegister2);

var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
