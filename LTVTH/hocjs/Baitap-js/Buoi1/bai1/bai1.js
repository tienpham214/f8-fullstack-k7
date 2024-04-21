function swapVariables() {
  var a = parseInt(document.getElementById("aInput").value);
  var b = parseInt(document.getElementById("bInput").value);

  var resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "Trước khi hoán vị:<br>";
  resultDiv.innerHTML += "a = " + a + "<br>";
  resultDiv.innerHTML += "b = " + b + "<br>";

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  resultDiv.innerHTML += "Sau khi hoán vị:<br>";
  resultDiv.innerHTML += "a = " + a + "<br>";
  resultDiv.innerHTML += "b = " + b + "<br>";
}
