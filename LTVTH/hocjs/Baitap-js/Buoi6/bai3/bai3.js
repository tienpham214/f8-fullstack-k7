var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var stringArr = [];
var numberArr = [];
var booleanArr = [];

arr.forEach(function (subArr) {
  subArr.forEach(function (item) {
    if (typeof item === "string") {
      stringArr.push(item);
    } else if (typeof item === "number") {
      numberArr.push(item);
    } else if (typeof item === "boolean") {
      booleanArr.push(item);
    }
  });
});

var resultDiv = document.getElementById("result");
resultDiv.innerHTML += "<p>String Array: " + stringArr.join(", ") + "</p>";
resultDiv.innerHTML += "<p>Number Array: " + numberArr.join(", ") + "</p>";
resultDiv.innerHTML += "<p>Boolean Array: " + booleanArr.join(", ") + "</p>";
