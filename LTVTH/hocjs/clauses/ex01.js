// câu lệnh rẽ nhánh
/*
Sẽ thực thị 1 đoạn trường trình nhất định, điều khiện sẽ dùng biểu thức logic (Boolean)
Trong lập trình có 2 câu lệnh rẽ nhánh 

1. if else

1.1 if thiếu
if (dieukien) {
    //code
}

1.2 if đủ
if (dieukien){
    code đúng
}

else {
    code sai
}


1.3 câu lệnh if nhiều nhánh
if (dieukien1){
    code nhánh 1
}

else if (dieukien2){
    code nhánh 2
}

else if (dieukien3){
    code nhánh 4
}

else else{

    code nhánh 4
}

if (dieukien4){
    code nhánh 3
}


1.4 câu lệnh if lồng nhau

if (dieukien1) {
    if(dieukien2) {
        code đúng dieukien2
    }
    else {
        code sai dieukien2
}else {
    code sai dieukien1
}



2. switch case

*/

var number = 15;
if (number < 0) {
  console.log("số siêu nhỏ");
} else if (number >= 0 && number < 5) {
  console.log("số nhỏ");
} else if (number >= 5 && number < 10) {
  console.log("số trung bình");
} else if (number >= 10 && number < 15) {
  console.log("số lớn");
} else {
  console.log("số siêu lớn");
}

// Bài tập tính lương được nhận của 1 nhân viên sau khi đã trừ thuế
/*
Quy ước:
- lƯƠNG <=5TR thì thuế là 0%
- Lương > 5tr và < 15tr thì thuế 3%
- lương >=15tr thì thuế là 5%
*/

var salary = 7000000;
var income, tax;
if (salary < 5000000) {
  tax = 0;
  console.log("null");
} else if (salary > 5000000 && salary < 15000000) {
  console.log((income = salary - (salary * 3) / 100));
} else if (salary > 15000000) {
  console.log((income = salary - (salary * 5) / 100));
}

var product;
var saleRate = 5; // giá sau khi giảm 5%.
var salePrice = 1000000; // giá sau khi giảm 5%. tìm giá gốc
var product = salePrice + (saleRate * 5) / 100;
console.log(product);

var seconds = 350;
//tìm xem có bao nhiêu phút, bao nhiêu giây
//gợi ý dùng hàm math.floor() để làm tròn xuống và lấy phần nguyên

var mins = Math.floor(seconds / 60);
seconds -= mins * 60; // số phút trừ số giây thừa
console.log(mins, seconds);
