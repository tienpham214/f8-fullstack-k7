// Hàm tạo đối tượng với ba thuộc tính name, age, address
function createCustomer(name, age, address) {
  return { name: name, age: age, address: address };
}

// Hàm xử lý mảng customers và thêm thuộc tính shortName
function createCustomers(customers) {
  // Tạo một mảng mới với đối tượng có thêm thuộc tính shortName
  var updatedCustomers = customers.map(function (customer) {
    // Tách tên thành các phần
    var parts = customer.name.split(" ");
    // Tạo shortName từ phần họ và tên cuối cùng
    var shortName = parts[0] + " " + parts[parts.length - 1];

    // Trả về một đối tượng mới với các thuộc tính cũ và thêm shortName
    return {
      name: customer.name,
      age: customer.age,
      address: customer.address,
      shortName: shortName,
    };
  });

  // Sắp xếp mảng theo tuổi tăng dần
  updatedCustomers.sort(function (a, b) {
    if (a.age < b.age) {
      return -1; // a đứng trước b
    } else if (a.age > b.age) {
      return 1; // b đứng trước a
    } else {
      return 0; // a và b bằng nhau, không thay đổi vị trí
    }
  });

  return updatedCustomers;
}

// Dữ liệu mẫu
var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

// Gọi hàm createCustomers và lưu kết quả vào biến result
var result = createCustomers(customers);

// In kết quả ra console
console.log(result);
