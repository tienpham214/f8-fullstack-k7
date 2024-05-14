var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var intersection = [];

arrA.forEach(function (elementA) {
  arrB.forEach(function (elementB) {
    if (elementA === elementB) {
      intersection.push(elementA);
    }
  });
});

document.getElementById("result").innerHTML =
  "Kết quả giao giữa hai mảng là: " + intersection.join(", ");

/* 

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = [];
arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});
console.log(result);

*/
