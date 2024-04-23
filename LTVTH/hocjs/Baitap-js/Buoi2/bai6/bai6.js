// Tạo một bảng chứa các ô
var chessboard = document.getElementById("chessboard");

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

    // Đặt màu nền cho ô
    if ((i + j) % 2 === 0) {
      square.classList.add("black");
    }

    // Thêm ô vào hàng
    row.appendChild(square);
  }

  // Thêm hàng vào bảng
  chessboard.appendChild(row);
}

/*Đầu tiên, chúng ta lấy thẻ <div> với id="chessboard" từ HTML bằng document.getElementById("chessboard") và lưu vào biến chessboard.
Tiếp theo, chúng ta sử dụng vòng lặp for để tạo ra 8 hàng (i chạy từ 0 đến 7).
Trong mỗi vòng lặp hàng, chúng ta tạo một thẻ <div> mới và đặt class cho nó là "row". Đây là hàng trong bàn cờ.
Sau đó, chúng ta tạo 8 ô trong mỗi hàng (j chạy từ 0 đến 7).
Trong mỗi vòng lặp ô, chúng ta tạo một thẻ <div> mới và đặt class cho nó là "square". Đây là ô trong bàn cờ.
Chúng ta kiểm tra xem tổng của chỉ số hàng (i) và chỉ số cột (j) của ô đó có phải là số chẵn không bằng cách sử dụng biểu thức (i + j) % 2 === 0. Nếu là số chẵn, ô sẽ có màu đen. Chúng ta thêm lớp "black" vào ô nếu điều kiện đúng. */
