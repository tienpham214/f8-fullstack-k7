function drawNumberTriangle() {
  var N = parseInt(document.getElementById("lines").value);
  var number = 1;
  var triangle = "";

  for (var i = 1; i <= N; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += number + " ";
      number++;
    }
    triangle += line + "\n";
  }

  document.getElementById("triangle").textContent = triangle;
}

// Hàm drawNumberTriangle() sử dụng để vẽ tam giác
// Vòng lặp bên ngoài tạo dòng thứ i của tam giác, bắt đầu từ i = 1 đến N.
// Trong mỗi dòng, vòng lặp bên trong tạo các số từ number đến number + i - 1 và nối chúng thành một chuỗi line.
// Sau đó, line được thêm vào triangle với một dấu xuống dòng để chúng xuất hiện trên các dòng riêng biệt trong kết quả cuối cùng.
