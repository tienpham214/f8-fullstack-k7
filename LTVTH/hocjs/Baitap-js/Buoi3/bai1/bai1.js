function generateFibonacci() {
  const num = parseInt(document.getElementById("numInput").value);
  if (isNaN(num) || num <= 0) {
    alert("Please enter a positive integer.");
    return;
  }

  const fibonacciList = document.getElementById("fibonacciList");
  fibonacciList.innerHTML = "";

  const fibNumbers = calculateFibonacci(num);
  fibNumbers.forEach((fib) => {
    const listItem = document.createElement("li");
    listItem.textContent = fib;
    fibonacciList.appendChild(listItem);
  });
}

function calculateFibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
}
