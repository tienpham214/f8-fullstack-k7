// Hàm kiểm tra số nguyên tố
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Hàm được gọi khi người dùng nhấn nút "Kiểm tra"
function checkPrime() {
  var number = parseInt(document.getElementById("number").value);
  var resultElement = document.getElementById("result");

  if (isPrime(number)) {
    resultElement.innerHTML = number + " là số nguyên tố.";
  } else {
    resultElement.innerHTML = number + " không phải là số nguyên tố.";
  }
}

// Hàm isPrime(number) nhận một số làm đối số và trả về true nếu số đó là số nguyên tố, ngược lại trả về false.
