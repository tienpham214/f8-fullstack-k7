const ones = [
  "",
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
];
const tens = [
  "",
  "mười",
  "hai mươi",
  "ba mươi",
  "bốn mươi",
  "năm mươi",
  "sáu mươi",
  "bảy mươi",
  "tám mươi",
  "chín mươi",
];
const hundreds = [
  "",
  "một trăm",
  "hai trăm",
  "ba trăm",
  "bốn trăm",
  "năm trăm",
  "sáu trăm",
  "bảy trăm",
  "tám trăm",
  "chín trăm",
];

function convertNumberToWords() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 9999) {
    alert("Please enter a valid number between 0 and 9999.");
    return;
  }

  const words = numberToWords(inputNumber);
  document.getElementById("result").textContent = words;
}

function numberToWords(num) {
  if (num === 0) return "không";

  let result = "";

  if (num >= 1000) {
    result += hundreds[Math.floor(num / 1000)] + " ngàn ";
    num %= 1000;
  }

  if (num >= 100) {
    result += hundreds[Math.floor(num / 100)] + " ";
    num %= 100;
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    if (num < 10) {
      result += ones[num];
    } else {
      result += tens[num];
    }
  }

  return result.trim();
}
