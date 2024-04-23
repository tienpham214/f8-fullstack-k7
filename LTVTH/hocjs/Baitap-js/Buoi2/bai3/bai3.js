function calculateExpression(n) {
  var S = 0;
  for (var i = 1; i <= n; i++) {
    S += i * (i + 1);
  }
  return S;
}

function calculateAndDisplay() {
  var n = parseInt(document.getElementById("number").value);
  var result = calculateExpression(n);
  document.getElementById("result").innerHTML =
    "Giá trị của biểu thức là: " + result;
}

// Sử dụng một vòng lặp for để tính toán từng phần tử của biểu thức và cộng vào biến S.
// Kết quả được trả về là giá trị của biểu thức s
