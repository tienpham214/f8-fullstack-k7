var numbersInput = document.getElementById("numbersInput");
var elementInput = document.getElementById("elementInput");
var output = document.getElementById("output");

function insertElement() {
  var numbers = numbersInput.value.split(",").map(Number);
  var element = parseInt(elementInput.value);

  // Bước 1: Sắp xếp mảng theo thứ tự tăng dần
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  var resultStep1 = "Bước 1:<br>";
  resultStep1 += numbers.join(", ") + "<br>";

  // Bước 2: Chèn thêm số vào mảng mà không làm thay đổi thứ tự sắp xếp
  var inserted = false;
  for (var i = 0; i < numbers.length; i++) {
    if (element < numbers[i]) {
      numbers.splice(i, 0, element);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    numbers.push(element);
  }

  var resultStep2 = "Bước 2:<br>";
  resultStep2 += numbers.join(", ");
  output.innerHTML = resultStep1 + resultStep2;
}
