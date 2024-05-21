var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  // Tách 'field' thành hai phần: tên trường chính và lỗi cụ thể (nếu có)
  var parts = field.split(".");
  var mainField = parts[0];
  var specificError = parts[1];

  // Lấy nhóm lỗi của trường chính từ đối tượng 'errors'
  var fieldErrors = errors[mainField];

  if (fieldErrors) {
    // Nếu có lỗi cụ thể và lỗi đó tồn tại, trả về lỗi cụ thể
    if (specificError) {
      if (fieldErrors[specificError]) {
        return fieldErrors[specificError];
      } else {
        return null; // Lỗi cụ thể không tồn tại
      }
    }

    // Nếu không có lỗi cụ thể, trả về lỗi 'required' nếu nó tồn tại
    if (fieldErrors["required"]) {
      return fieldErrors["required"];
    }

    // Nếu không có lỗi 'required', trả về lỗi đầu tiên trong nhóm lỗi
    for (var key in fieldErrors) {
      return fieldErrors[key];
    }
  }

  // Nếu không tìm thấy nhóm lỗi, trả về null
  return null;
}

// Test cases
console.log(getError("name")); // Vui lòng nhập họ tên
console.log(getError("name.min")); // Họ tên phải từ 5 ký tự

console.log(getError("email")); // Vui lòng nhập địa chỉ email
console.log(getError("email.unique")); // Email đã có người sử dụng

console.log(getError("password")); // Vui lòng nhập mật khẩu
console.log(getError("password.same")); // Mật khẩu phải khớp với mật khẩu nhập lại
