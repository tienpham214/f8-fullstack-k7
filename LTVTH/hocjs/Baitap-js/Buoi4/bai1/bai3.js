// Hàm chạy hiệu ứng karaoke
function runKaraokeEffect() {
  var content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit minus officiis deleniti, animi mollitia quia incidunt cupiditate exercitationem distinctio? Fugit ipsum maiores, dolor quam doloremque eaque saepe sit et.`;

  // Loại bỏ khoảng trắng không cần thiết ở đầu và cuối chuỗi
  content = content.trim();

  // Tạo một mảng chứa các ký tự riêng lẻ
  var characters = content.split("");

  // Hàm đệ quy để thực hiện hiệu ứng karaoke
  function animate(index) {
    // Tạo một chuỗi mới để chứa nội dung của đoạn văn
    var newContent = "";

    // Duyệt qua từng ký tự trong mảng
    for (var i = 0; i < characters.length; i++) {
      // Nếu là ký tự hiện tại hoặc trước đó, màu sẽ là đỏ, ngược lại là đen
      if (i <= index) {
        newContent += '<span style="color: red;">' + characters[i] + "</span>";
      } else {
        newContent +=
          '<span style="color: black;">' + characters[i] + "</span>";
      }
    }

    // Cập nhật nội dung của thẻ body
    document.body.innerHTML = newContent;

    // Gọi lại hàm animate sau 0.5 giây với index tăng lên
    setTimeout(function () {
      if (index < characters.length) {
        animate(index + 1);
      } else {
        // Nếu đã duyệt qua tất cả các ký tự, gọi lại hàm animate với index = 0 sau 1 giây
        setTimeout(function () {
          animate(0);
        }, 1000);
      }
    }, 100); // Thời gian delay giữa mỗi ký tự
  }

  // Bắt đầu hiệu ứng karaoke với index ban đầu là 0
  animate(0);
}

// Gọi hàm để chạy hiệu ứng karaoke
runKaraokeEffect();
