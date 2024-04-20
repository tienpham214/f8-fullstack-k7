var a = 10;
var b = 20;
var c = 15;
var max;

if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}

console.log("Số lớn nhất trong ba số là:", max);

// Đầu tiên, chúng ta khai báo ba biến a, b, c với giá trị tương ứng.
// Sau đó, chúng ta sử dụng câu lệnh if-else để so sánh giữa ba số.
// Nếu a lớn nhất, chúng ta gán giá trị của a cho biến max.
// Nếu không, nếu b lớn nhất, chúng ta gán giá trị của b cho biến max.
// Trong trường hợp còn lại, tức là c lớn nhất hoặc có ít nhất hai số bằng nhau và đều lớn nhất, chúng ta gán giá trị của c cho biến max.
// Cuối cùng, chúng ta in ra màn hình số lớn nhất.
