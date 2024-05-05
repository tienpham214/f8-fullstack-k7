// Lấy phần tử chứa bảng cửu chương
var multiplicationTable = document.getElementById("multiplication-table");

// Tạo bảng cửu chương từ 1 đến 10
var table = "<table>";
for (var i = 1; i <= 10; i++) {
  table += "<tr>";
  for (var j = 1; j <= 10; j++) {
    table += "<td>" + i + " x " + j + " = " + i * j + "</td>";
  }
  table += "</tr>";
}
table += "</table>";

// Hiển thị bảng cửu chương
multiplicationTable.innerHTML = table;
