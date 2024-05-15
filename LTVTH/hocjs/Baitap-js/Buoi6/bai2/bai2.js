var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flattenedArr = [];

arr.forEach(function (item) {
  if (Array.isArray(item)) {
    item.forEach(function (subItem) {
      if (Array.isArray(subItem)) {
        subItem.forEach(function (subSubItem) {
          flattenedArr.push(subSubItem);
        });
      } else {
        flattenedArr.push(subItem);
      }
    });
  } else {
    flattenedArr.push(item);
  }
});

var resultDiv = document.getElementById("result");
resultDiv.innerHTML = "<p>Flattened Array: " + flattenedArr.join(", ") + "</p>";

/*
Bài này nên sử dụng đệ quy để có thể xử lý được các mảng lồng nhiều cấp. Có thể tham khảo cách sau:
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flatArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    // Nếu phần tử tại vị trí i là 1 mảng thì gọi lại hàm flatArr, ngược lại nếu không phải mảng sẽ thêm phần tử đó vào mảng mới
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatArr(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(flatArr(arr));

*/
