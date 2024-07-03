const countdownElem = document.getElementById("countdown"); // Lấy phần tử hiển thị đếm ngược
const buttonElem = document.getElementById("get-link"); // Lấy phần tử nút bấm
let timeLeft = 30; // Đặt thời gian đếm ngược ban đầu là 30 giây
let startTime; // Biến để lưu thời gian bắt đầu
let timeoutId; // Biến để lưu ID của timeout

function updateCountdown(timestamp) {
  if (!startTime) startTime = timestamp; // Thiết lập thời gian bắt đầu nếu chưa có

  // Tính toán thời gian đã trôi qua
  const elapsed = (timestamp - startTime) / 1000;
  // Tính toán thời gian còn lại và đảm bảo không âm
  const remainingTime = Math.max(0, timeLeft - Math.floor(elapsed));
  // Cập nhật hiển thị thời gian
  countdownElem.textContent = remainingTime;

  if (remainingTime === 0) {
    // Khi thời gian bằng 0, kích hoạt nút bấm
    buttonElem.classList.add("enabled");
    buttonElem.disabled = false;
    buttonElem.style.cursor = "pointer";
    buttonElem.onclick = () => {
      clearTimeout(timeoutId); // Hủy bỏ tự động làm mới khi người dùng bấm nút
      window.location.href = "https://fullstack-nodejs.fullstack.edu.vn/"; // Thực hiện chuyển hướng
    };

    // Thiết lập thời gian để tự động làm mới trang sau 30 giây nếu người dùng không bấm nút
    timeoutId = setTimeout(() => {
      location.reload(); // Tự động làm mới trang
    }, 30000);
  } else {
    requestAnimationFrame(updateCountdown); // Tiếp tục đếm ngược nếu thời gian còn lại lớn hơn 0
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Khi tab không hoạt động, dừng đếm ngược
    startTime +=
      performance.now() - (startTime + (performance.now() - startTime) / 1000);
  } else {
    // Khi quay lại tab, tiếp tục đếm ngược
    requestAnimationFrame(updateCountdown);
  }
});

// Vô hiệu hóa nút bấm ban đầu
buttonElem.disabled = true;
// Bắt đầu đếm ngược
requestAnimationFrame(updateCountdown);
