var a = 10;
var b = 20;

console.log("Trước khi hoán vị:");
console.log("a =", a); // a = 10
console.log("b =", b); //  b = 20

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("Sau khi hoán vị:");
console.log("a =", a); // a = 20
console.log("b =", b); // b = 10

// phép toán login 2 ngôi
// Khi thực hiện hoán vị hai số sử dụng phép toán hoán vị, ta có thể thấy rằng:

// a = a ^ b;: a bây giờ chứa giá trị của a hoán vị b.
// b = a ^ b;: Do a đã được gán giá trị mới (a hoán vị b), khi thực hiện phép hoán vị với b, ta thu được giá trị ban đầu của a.
// a = a ^ b;: Do a đã được gán giá trị mới (b), khi thực hiện phép hoán vị với giá trị ban đầu của b, ta thu được giá trị ban đầu của a.
// Điều này làm cho giá trị của a và b được hoán đổi mà không cần sử dụng bất kỳ biến trung gian nào.
