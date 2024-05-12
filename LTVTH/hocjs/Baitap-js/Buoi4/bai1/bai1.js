var content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit minus officiis deleniti, animi mollitia quia incidunt cupiditate exercitationem distinctio? Fugit ipsum maiores, dolor quam doloremque eaque saepe sit et.`;

// Loại bỏ khoảng trắng không cần thiết ở đầu và cuối chuỗi
content = content.trim();

// Khởi tạo biến đếm index để theo dõi từ hiện tại
var index = 0;

// Thiết lập bộ đếm thời gian
var interval = setInterval(function () {
  // Tìm vị trí của từ kế tiếp
  var nextSpaceIndex = content.indexOf(" ", index);

  // Nếu không còn từ kế tiếp
  if (nextSpaceIndex === -1) {
    // Tìm vị trí cuối cùng của từ
    nextSpaceIndex = content.length;
  }

  // Tạo một biến tạm thời để lưu từ hiện tại
  var currentWord = content.substring(index, nextSpaceIndex);

  // Tạo một chuỗi mới với từ hiện tại có màu đỏ
  var newContent =
    content.substring(0, index) +
    '<span style="color: red;">' +
    currentWord +
    "</span>" +
    content.substring(nextSpaceIndex);

  // Cập nhật nội dung của thẻ body
  document.body.innerHTML = newContent;

  // Tăng biến index lên để chuyển sang từ tiếp theo
  index = nextSpaceIndex + 1;

  // Nếu index vượt quá chiều dài của chuỗi, đặt lại index về 0 và bắt đầu lại từ đầu
  if (index >= content.length) {
    index = 0;
  }
}, 500);

// Cho chuỗi text bất kỳ, yêu cầu chạy từng từ màu đỏ, sau 0,5s đổi màu đen, tương tự với các từ tiếp theo, sau đó lặp liên tục

/* Cú pháp của phương thức substring() như sau:

javascript
Copy code
string.substring(startIndex, endIndex)
Trong đó:

startIndex: là chỉ mục của ký tự bắt đầu của phần con chuỗi cần trích xuất. Chỉ mục này bắt đầu từ 0.
endIndex (tùy chọn): là chỉ mục của ký tự kết thúc của phần con chuỗi cần trích xuất. Đây là chỉ mục của ký tự sau ký tự cuối cùng trong phần con chuỗi. Nếu không được cung cấp, phương thức sẽ trích xuất từ startIndex đến hết chuỗi.


var str = "Hello world";
var subStr1 = str.substring(6); // Kết quả: "world"
var subStr2 = str.substring(0, 5); // Kết quả: "Hello"
Trong ví dụ trên:

subStr1 trích xuất từ vị trí thứ 6 (ký tự "w") đến hết chuỗi.
subStr2 trích xuất từ vị trí thứ 0 đến vị trí thứ 5 (ký tự "H" đến "o", không bao gồm "o" đó).


*/