function findMaxMin() {
  var arrayInput = document.getElementById("arrayInput").value;
  var array = arrayInput.split(",").map(Number);

  var max = array[0];
  var min = array[0];
  var maxIndex = 0;
  var minIndex = 0;

  // Tìm số lớn nhất và số nhỏ nhất cùng vị trí trong mảng
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  // Hiển thị kết quả
  document.getElementById("result").innerText =
    "Max value is " +
    max +
    " at index " +
    maxIndex +
    "\n" +
    "Min value is " +
    min +
    " at index " +
    minIndex;
}
