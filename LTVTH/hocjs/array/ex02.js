console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4"];

//1. at(index)  => lấy phần tử mảng theo index

// console.log(users.flat(0));

// //2. concat(arr1, arr2,....)  : dùng để nối mảng

// console.log(users.concat([1, 2, 3], [3, 4, 5]));

// //3. fill(value)  => sẽ thay thế tất cả các phần tử trong mảng thành 1 giá trị

// users.fill(0);
// console.log(users);

// //4. indexOf(value)  => tìm phần tử trong mảng và trả về index đầu tiên

// console.log(users.indexOf("Users 2"));

// //5. lastIndexOf(value)  => tìm phần tử trong mảng trả về index cuối cùng

// console.log(users.lastIndexOf("Users 2"));

// //6. includes(value)  => tìm phần tử trong mảng và trả về true false

// console.log(users.includes("Users 3"));

//7. slice(start, end) => cắt mảng từ index đến end-1
console.log(users.slice(0, 2));

console.log(users.slice(-2));

//8. push(value1, value2, value3)  => thêm phần tử vào cuối mảng và thay đổi mảng ban đầu, giá trị của hàm push là tổng số lượng của phần tử của cả mảng sau khi thêm

var count = users.push(1, 2, 3, "A", "B", "C");
console.log(count);
console.log(users);

//9. unshift(value1, value2, value3) => thêm phần tử vào đầu mảng và thay đổi mảng ban đầu. giá trị của hàm unshift là tổng số lượng phần tử của cả mảng sau khi thêm

var count = users.unshift(1, 2, 3, "A", "B", "C");
console.log(count);
console.log(users);

//10. pop()  => xóa phần tử cuối cùng mảng và trả về giá trị phần tử vừa xóa (thay đổi mảng ban đầu)

var value = users.pop();
console.log(value);
console.log(users);

//11. shift()  => xóa phần tử đầu tiên mảng và trả về giá trị phần tử vừa xóa (thay đổi mảng ban đầu)

var value = users.shift();
console.log(value);
console.log(users);

//12. reverse() => đảo ngược mảng, trả về mảng và thay đổi mảng ban đầu

var newArray = users.reverse();
console.log(newArray);
console.log(users);

//13. join()  => nối các phần tử mảng thành chuỗi

console.log(users.join(" "));

//vd: lấy tên
var fullname = "Tạ Hoàng An";
var firstName = fullname.split(" ").slice(-1).join();
console.log(firstName);
