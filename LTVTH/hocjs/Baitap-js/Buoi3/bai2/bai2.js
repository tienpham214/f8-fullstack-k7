function reverseInteger() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  if (isNaN(inputNumber)) {
    alert("Please enter a valid integer.");
    return;
  }

  const reversed = reverse(inputNumber);
  document.getElementById("reversedNumber").textContent = reversed;
}

function reverse(num) {
  const sign = Math.sign(num);
  const reversed = parseInt(
    Math.abs(num).toString().split("").reverse().join("")
  );
  return reversed * sign;
}
