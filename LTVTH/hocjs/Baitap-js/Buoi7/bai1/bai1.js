function findSmallestSymmetricPrime() {
  // Lấy giá trị từ ô nhập và chuyển thành số nguyên
  const n = parseInt(document.getElementById("inputNumber").value);

  // Tạo mảng chứa các số từ n đến n + 9999
  const numbers = Array.from({ length: 10000 }, (_, i) => i + n);

  // Sử dụng reduce để tìm số nguyên tố đối xứng nhỏ nhất
  const result = numbers.reduce((smallest, current) => {
    // Kiểm tra số nguyên tố
    var isPrime = true;
    if (current <= 1) {
      isPrime = false;
    } else if (current > 2 && current % 2 === 0) {
      isPrime = false;
    } else {
      for (var i = 3; i <= Math.sqrt(current); i += 2) {
        if (current % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    // Kiểm tra số đối xứng
    const strCurrent = String(current);
    var isPalindrome = true;
    for (var i = 0, j = strCurrent.length - 1; i < j; i++, j--) {
      if (strCurrent[i] !== strCurrent[j]) {
        isPalindrome = false;
        break;
      }
    }

    // Nếu số thỏa mãn cả hai điều kiện
    if (isPrime && isPalindrome) {
      if (smallest === null || current < smallest) {
        return current;
      }
    }

    return smallest;
  }, null);

  // Hiển thị kết quả
  document.getElementById("result").textContent = `Result: ${result}`;
}
