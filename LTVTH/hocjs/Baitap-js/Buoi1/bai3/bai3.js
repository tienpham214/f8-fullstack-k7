function findMax() {
  var a = parseFloat(document.getElementById("aInput").value);
  var b = parseFloat(document.getElementById("bInput").value);
  var c = parseFloat(document.getElementById("cInput").value);

  var max;

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập giá trị hợp lệ cho a, b, c!");
    return;
  }

  if (a === "" || b === "" || c === "") {
    alert("Vui lòng nhập giá trị hợp lệ cho a, b, c!");
    return;
  }

  max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Số lớn nhất trong ba số là: " + max;
}

var resultDiv = document.getElementById("result");
