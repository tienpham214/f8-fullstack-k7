//Hàm setInterval --> lặp đi lặp lại 1 đoạn chương trình, với 1 khoảng thời gian nhất định
// vd cứ 1 giây lại chạy lại 1 lần

// var count = 0;
// setInterval(function () {
//   console.log("hello", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

//Định nghĩa hàm callback có đối số
// tạo 1 hàm có tham số, bên trong hàm đó gọi hàm callback có tham số và truyền đối số vào

function display(callback) {
  console.log("display");
  typeof callback === "function" && callback();
}

var showLog = function (a) {
  console.log("hello", a);
};

var handleShowLog = function () {
  showLog("TIEN");
};
display(handleShowLog);

//

function display2(callback, ...args) {
  console.log("Display2");
  typeof callback === "function" && callback(...args); // spread operator
}

function showLog2(a, b) {
  console.log("hello f8", a, b);
}

display2(showLog2, "Tien", "JS");

//Bài tập

/*
step1(function(){

    step2(function (){
        step3()
    })
})

*/

function step1(callback) {
  setTimeout(function () {
    console.log("Bước 1");
    typeof callback === "function" && callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(function () {
    console.log("Bước 2");
    typeof callback === "function" && callback();
  }, 500);
}

function step3(callback) {
  setTimeout(function () {
    console.log("Bước 3");
    typeof callback === "function" && callback();
  }, 1500);
}

step1(function () {
  step2(function () {
    step3();
  });
});

// step1();
// step2();
// step3();

//Buổi sau:

/*
 1. Định nghĩa về hàm con
2. là Closure
3. Kỹ thuật Thunk function
4. IIFE
5. giải thuật đệ quy


1. Định nghĩa về hàm con: Hàm con là một hàm được định nghĩa trong một hàm khác. Trong ngữ cảnh của lập trình hàm, định nghĩa hàm con giúp tạo ra một phạm vi cục bộ cho các biến và hàm, không làm cho chúng trở thành biến toàn cục hoặc hàm toàn cục. Điều này giúp trong việc tổ chức mã và tránh xung đột tên hoặc sự ghi đè.


function outerFunction() {
    let outerVar = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVar);
    }
    
    innerFunction(); // Gọi hàm con trong hàm cha
}

outerFunction(); // Kết quả sẽ là: "I am outside!"



Định nghĩa về hàm con:
Dòng 2: Khai báo hàm outerFunction, trong đó có một biến outerVar.
Dòng 4-7: Định nghĩa hàm innerFunction bên trong outerFunction, và nó có thể truy cập biến outerVar.
Dòng 9: Gọi hàm innerFunction từ bên trong outerFunction.


2. Closure: Closure là một khái niệm trong lập trình, xảy ra khi một hàm có thể truy cập các biến trong phạm vi của hàm khác trong đó nó được định nghĩa, ngay cả khi hàm bên ngoài đã kết thúc thực thi. Closure cho phép hàm "ghi nhớ" môi trường nơi nó đã được tạo ra. Điều này thường được sử dụng trong các tình huống như tạo ra các hàm callback trong JavaScript hoặc trong việc triển khai các mẫu thiết kế như Factory hoặc Module.

function outerFunction() {
    let outerVar = 'I am outside!';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // Kết quả sẽ là: "I am outside!"

Closure:
Dòng 2: Khai báo hàm outerFunction, trong đó có một biến outerVar.
Dòng 4-7: Định nghĩa hàm innerFunction bên trong outerFunction, và nó có thể truy cập biến outerVar.
Dòng 9: outerFunction trả về hàm innerFunction, nhưng không gọi nó ngay lập tức.
Dòng 11: Gán kết quả của outerFunction (một hàm) vào biến closureExample.
Dòng 12: Gọi closureExample, và innerFunction vẫn có thể truy cập outerVar, tạo thành closure.


3. Kỹ thuật Thunk function: Thunk function là một hàm được sử dụng để trì hoãn việc tính toán hoặc thực thi một phần của mã. Trong một số ngôn ngữ lập trình, như JavaScript, thunk function thường được sử dụng trong việc xử lý bất đồng bộ, khi cần phải chờ đợi kết quả từ một hoạt động nào đó trước khi tiếp tục thực thi mã. Thunk function thường được truyền vào như là một hàm callback, hoặc được sử dụng để tạo ra các biểu thức hoặc closures để trì hoãn việc tính toán.


function thunkFunction(value) {
    return function() {
        console.log('The value is:', value);
    };
}

let delayedFunction = thunkFunction(10);
delayedFunction(); // Kết quả sẽ là: "The value is: 10"



Kỹ thuật Thunk function:
Dòng 2: Định nghĩa hàm thunkFunction, nhận một tham số value.
Dòng 3-5: Trả về một hàm không tham số, nhưng có thể truy cập value.
Dòng 7: Gán kết quả của thunkFunction (một hàm) vào delayedFunction.
Dòng 8: Gọi delayedFunction, và nó in ra giá trị của value đã được truyền vào khi khởi tạo delayedFunction.



4. IIFE (Immediately Invoked Function Expression): IIFE là một cú pháp trong JavaScript, được sử dụng để định nghĩa và thực thi một hàm ngay lập tức sau khi nó được định nghĩa. Điều này giúp tạo ra một phạm vi cục bộ cho mã và tránh xung đột tên, đồng thời không làm cho hàm trở thành một biến toàn cục. Cú pháp của một IIFE thường là (function() { // code })(); trong JavaScript.


  (function() {
    let message = 'Hello from IIFE!';
    console.log(message);
})(); // Kết quả sẽ là: "Hello from IIFE!"



IIFE (Immediately Invoked Function Expression):
Dòng 2-5: Định nghĩa một hàm không tên và ngay lập tức gọi nó.
Dòng 3: Khai báo biến message.
Dòng 4: In ra giá trị của message.


5. Giải thuật đệ quy: Đệ quy là một kỹ thuật trong lập trình mà một hàm gọi chính nó để giải quyết một vấn đề. Giải thuật đệ quy thường được sử dụng để giải quyết các vấn đề được chia nhỏ thành các phần nhỏ hơn và giải quyết các phần đó một cách đệ quy. Các giải thuật đệ quy thường được triển khai thông qua việc sử dụng các hàm đệ quy, trong đó hàm gọi chính nó với các đối số khác nhau mỗi lần gọi để tiến hành giải quyết vấn đề.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Kết quả sẽ là: 120 (5!)


Giải thuật đệ quy:
Dòng 2: Định nghĩa hàm factorial nhận một tham số n.
Dòng 3-7: Kiểm tra nếu n là 0 hoặc 1 thì trả về 1, ngược lại thực hiện đệ quy bằng cách gọi lại factorial với n - 1.
Dòng 9: Gọi factorial(5) để tính giai thừa của 5.


*/
