// Tự chuyển tự động về kiểu logic để so sánh
//Falsy: 0, NaN, null, "", undefine, false
//Truthy: các trường hợp còn lại

// var a = "";
// var b = !a ? "f8" : "tienpv"; //Toán tử 3 ngôi

//  cú pháp truthy: variable
// cú pháp falsy: !variable
// console.log(b);

/*
Viết tắt kiểu truthy

if (a){
    //code
}

*/

//2.  Toán tử &&

// var a = 1;
// var b = a && "F8";
// console.log(b);

// var a = 1;
// var b = 0; // Nếu b = 0 thì là falsy
// var c = 3;
// // var result = a && b && c; // giá trị đúng thì lấy giá trị cuối, nếu gặp giá trị sai thì sẽ dừng và lấy giá trị sai đó luôn

// var result = a && b === 0 && c; // nếu cho var b = 2 thì kết quả sẽ ra false
// console.log(result);

//3. Toán tử ||   --> tìm biểu thức đúng, còn sai là còn chạy đến khi nào hết thì thôi

// var a = 1; // nếu a = false thì chạy tiếp kết quả đến giá trị cuối
// var b = 0;
// var result = a || b || "F8";
// console.log(result);

var a;
var b = a || "F8";
console.log(b);
