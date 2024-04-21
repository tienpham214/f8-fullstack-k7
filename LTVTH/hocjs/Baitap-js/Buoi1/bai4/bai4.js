function checkSign() {
  var a = parseFloat(document.getElementById("aInput").value);
  var b = parseFloat(document.getElementById("bInput").value);
  var result;

  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập giá trị hợp lệ cho a và b!");
    return;
  }

  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    result = "Hai số có cùng dấu.";
  } else {
    result = "Hai số không có cùng dấu.";
  }

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
}
