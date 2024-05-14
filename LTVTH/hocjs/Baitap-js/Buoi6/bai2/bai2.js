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
