//Reduce(callback, initialValue)

/*
callback có 4 tham số
- prevValue
- currententValue
- index
- array => mảng ban đầu
*/

//initialValue : giá trị khởi tạo
/* Cách hoạt động:

1. Trường hợp ko có initialValue: 
- vòng lặp sẽ chạy từ phần tử thứ 2 cho đến hết, bỏ qua phần tử đầu
- prevValue của lần lặp đầu tiên chính là lần lặp đầu tiên của mảng
- currententValue:là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là lần return cuối cùng


2. Có initialValue 
- Vòng lặp sẽ chạy từ đầu
- prevValue của lần lặp đầu tiên chính là initialValue
- currententValue là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là lần return cuối cùng
*/

//vd1: Trường hợp ko có initialValue
// var numbers = [5, 10, 15, 20, 25, 30];
// // var result = numbers.reduce(function (prev, currentent, index) {
// //   console.log(`prev = ${prev}`, `currentent =  ${currentent}`, `index = ${index}`);
// //   //   return "F8";
// //   return currentent;
// // }, 0);

// var total = numbers.reduce(function (prev, currentent) {
//   return prev + currentent;
// }, 0);
// console.log(total);

//vd 2: Tìm phần tử lớn nhất dùng reduce (pre < currentent); nếu lấy giá trị nhỏ nhất thì pre > currentent
// var numbers = [2, 9, 5, 1, -5];

// var maxNumbers = numbers.reduce(function (prev, currentent) {
//   if (prev < currentent) {
//     return currentent;
//   }
//   return prev;
// });
// console.log(maxNumbers);

//vd3: yêu cầu xóa các phần tử trùng trong mảng users, yêu cầu dùng reduce

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];

var newUsers = users.reduce(function (prev, currentent) {
  if (!prev.includes(currentent)) {
    prev.push(currentent);
  }
  return prev;
}, []);
console.log(newUsers);

// vd4 : tìm phần tử khác nhau giữa 2 mảng, output là [5,9], yêu cầu dùng reduce
var arr1 = [5, 2, 1, 6, 9];
var arr2 = [2, 1, 6];

var newArr = arr1.reduce(function (prev, currentent) {
  if (!arr2.includes(currentent) && !prev.includes(currentent)) {
    prev.push(currentent);
  }
  return prev;
}, []);
console.log(newArr);

// vd5: yêu cầu làm phẳng mảng numbers, điều kiện dùng reduce, ko dùng hàm flat
var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];

var flatArray = function (arr) {
  return arr.reduce(function (prev, currentent) {
    return prev.concat(
      Array.isArray(currentent) ? flatArray(currentent) : currentent
    );
  }, []);
};

var newArr = flatArray(numbers);
console.log(newArr);

//cách viết chi tiết như bên dưới
var flatArray = function (arr) {
  return arr.reduce(function (prev, currentent) {
    // kiểm tra xem phần tử có phải là mảng ko
    //nếu đúng là mảng => gọi hàm đệ quy
    if (Array.isArray(currentent)) {
      return prev.concat(flatArray(currentent));
    }

    // ngược lại thêm currentent vào prev

    return prev.concat(currentent);
  }, []);
};

var newArr = flatArray(numbers);
console.log(newArr);

//vd 6:
//chunk array với size tương ứng, chỉ sử dụng reduce
// output : [[1,2], [3,4], [5,6], [7,8], 9]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var size = 2;

var chunked = numbers.reduce((prev, current) => {
  const lastChunk = prev[prev.length - 1];

  if (!lastChunk || lastChunk.length === size) {
    prev.push([current]);
  } else {
    lastChunk.push(current);
  }

  return prev;
}, []);

console.log(chunked);

//cách 2:

var chunkArr = numbers.reduce(
  function (prev, current) {
    //kiểm tra số lượng phần tử con cuối cùng
    if (prev[prev.length - 1].length < size) {
      //thêm phần tử mới vào mảng con

      prev[prev.length - 1].push(current);
    } else {
      //ngược lại thêm 1 mảng mới, thêm đoạn mới
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArr);

// Tìm hiểu bài sau:
// array.form()
// array.keys()
//Tham chiếu Array
// Copy Array
