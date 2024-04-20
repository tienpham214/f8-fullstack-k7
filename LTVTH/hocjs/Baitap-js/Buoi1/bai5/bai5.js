var a = 10;
var b = 5;
var c = 20;

if (a > b) {
  [a, b] = [b, a];
}

if (b > c) {
  [b, c] = [c, b];
}

if (a > b) {
  [a, b] = [b, a];
}

console.log("Ba số sau khi sắp xếp là:", a, b, c);

//  khai báo ba biến a, b, c với giá trị tương ứng.
//  sử dụng câu lệnh if để so sánh giữa a và b. Nếu a lớn hơn b, chúng ta đổi chỗ a và b bằng cách sử dụng cú pháp gán đồng thời [a, b] = [b, a];.
//  kiểm tra giữa b và c. Nếu b lớn hơn c, chúng ta đổi chỗ b và c.
//  kiểm tra lại giữa a và b để đảm bảo a là số nhỏ nhất. Nếu không, chúng ta đổi chỗ lại a và b.
//  in ra màn hình ba số đã được sắp xếp theo thứ tự tăng dần.
