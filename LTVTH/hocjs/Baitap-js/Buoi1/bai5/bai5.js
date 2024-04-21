function sortNumbers() {
  var a = parseFloat(document.getElementById("aInput").value);
  var b = parseFloat(document.getElementById("bInput").value);
  var c = parseFloat(document.getElementById("cInput").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập giá trị hợp lệ cho a, b và c!");
    return;
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  if (b > c) {
    [b, c] = [c, b];
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Ba số sau khi sắp xếp là: " + a + ", " + b + ", " + c;
}
