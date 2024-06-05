/*
Các phương thức của mảng
Mảng có nhiều phương thức hữu ích, bao gồm:

push(): Thêm một giá trị vào cuối mảng.
pop(): Loại bỏ một giá trị khỏi cuối mảng.
unshift(): Thêm một giá trị vào đầu mảng.
shift(): Loại bỏ một giá trị khỏi đầu mảng.
indexOf(): Trả về chỉ số của lần xuất hiện đầu tiên của một giá trị trong mảng.
lastIndexOf(): Trả về chỉ số của lần xuất hiện cuối cùng của một giá trị trong mảng.
slice(): Trả về một mảng con của mảng hiện tại.
concat(): Nối hai mảng lại với nhau.
sort(): Sắp xếp các giá trị trong mảng.
filter(): Lọc các giá trị trong mảng dựa trên một điều kiện.
map(): Áp dụng một hàm cho từng giá trị trong mảng và trả về một mảng mới.
*/
const myArray = [1, 2, 3, 4, 5];

// Thêm một giá trị vào cuối mảng
myArray.push(6);
console.log(myArray);

// Loại bỏ một giá trị khỏi cuối mảng
myArray.pop();

// Thêm một giá trị vào đầu mảng
myArray.unshift(0);

// Loại bỏ một giá trị khỏi đầu mảng
myArray.shift();

// Trả về chỉ số của lần xuất hiện đầu tiên của giá trị 3 trong mảng
const index = myArray.indexOf(3);

// Trả về chỉ số của lần xuất hiện cuối cùng của giá trị 5 trong mảng
const lastIndex = myArray.lastIndexOf(5);

// Trả về một mảng con của mảng hiện tại, bắt đầu từ chỉ số 2 và kết thúc tại chỉ số 4
const subArray = myArray.slice(2, 4);

// Nối hai mảng lại với nhau
const newArray = myArray.concat([6, 7, 8]);

// Sắp xếp các giá trị trong mảng
myArray.sort();

// Lọc các giá trị trong mảng dựa trên điều kiện là giá trị chia hết cho 2
const filteredArray = myArray.filter((x) => x % 2 === 0);

// Áp dụng một hàm cho từng giá trị trong mảng và trả về một mảng mới
const mappedArray = myArray.map((x) => x * 2);
