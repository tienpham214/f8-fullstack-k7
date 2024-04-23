// Tạo bảng chứa bàn cờ
var chessboard = document.createElement("div");
chessboard.id = "chessboard";
document.body.appendChild(chessboard);

// Tạo bảng gồm 8 hàng và 8 ô
for (var i = 0; i < 8; i++) {
  // Tạo một hàng mới
  var row = document.createElement("div");
  row.className = "row";

  // Tạo 8 ô trong mỗi hàng
  for (var j = 0; j < 8; j++) {
    // Tạo một ô mới
    var square = document.createElement("div");
    square.className = "square";

    // Xác định màu của ô
    if ((i + j) % 2 === 0) {
      square.classList.add("black");
    }

    // Thêm ô vào hàng
    row.appendChild(square);
  }

  // Thêm hàng vào bàn cờ
  chessboard.appendChild(row);
}
