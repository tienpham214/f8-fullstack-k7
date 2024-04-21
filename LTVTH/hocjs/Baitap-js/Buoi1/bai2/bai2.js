function calculateExpression() {
  var S = 10 + 20 + Math.pow(5, 10) / 2;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Giá trị của biểu thức S là: " + S;
}
