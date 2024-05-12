function removeDuplicates() {
  var arrayInput = document.getElementById("arrayInput").value;
  var array = arrayInput.split(",").map(Number);

  var uniqueArray = [];

  // Kiểm tra từng phần tử trong mảng
  for (var i = 0; i < array.length; i++) {
    var isDuplicate = false;

    // Kiểm tra xem phần tử đã tồn tại trong mảng kết quả chưa
    for (var j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    // Nếu không trùng, thêm vào mảng kết quả
    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }

  // Hiển thị mảng kết quả
  document.getElementById("result").innerText =
    "Mảng sau khi loại bỏ phần tử trùng là: " + uniqueArray.join(", ");
}
