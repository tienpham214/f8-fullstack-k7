function calculateAverage() {
  var arrayInput = document.getElementById("arrayInput").value;
  var array = arrayInput.split(",").map(Number);

  var primeSum = 0;
  var primeCount = 0;

  // Kiểm tra từng phần tử trong mảng
  for (var i = 0; i < array.length; i++) {
    var isPrime = true;

    // Kiểm tra xem phần tử có phải là số nguyên tố không
    if (array[i] > 1) {
      for (var j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }

    // Nếu là số nguyên tố, cộng vào tổng và tăng số lượng lên 1
    if (isPrime) {
      primeSum += array[i];
      primeCount++;
    }
  }

  // Kiểm tra nếu không có số nguyên tố, hiển thị thông báo
  if (primeCount === 0) {
    document.getElementById("result").innerText = "Không có số nguyên tố";
  } else {
    var primeAverage = primeSum / primeCount;
    document.getElementById("result").innerText =
      "Trung bình các số nguyên tố trong mảng là: " + primeAverage.toFixed(2);
  }
}
