<!-- var slider = document.querySelector(".slider"); // Lấy phần tử với lớp 'slider'
var sliderInner = slider.querySelector(".slider-inner"); // Lấy phần tử con với lớp 'slider-inner'
var sliderNav = slider.querySelector(".slider-nav"); // Lấy phần tử con với lớp 'slider-nav'
var sliderDots = slider.querySelector(".slider-dots"); // Lấy phần tử con với lớp 'slider-dots'
var navNext = sliderNav.querySelector(".next"); // Lấy phần tử con với lớp 'next' trong 'slider-nav'
var navPrev = sliderNav.querySelector(".prev"); // Lấy phần tử con với lớp 'prev' trong 'slider-nav'
var sliderItems = sliderInner.querySelectorAll(".item"); // Lấy tất cả phần tử con với lớp 'item' trong 'slider-inner'

if (sliderItems.length) { // Nếu có bất kỳ phần tử 'sliderItems' nào
  var startX, // Lưu vị trí ban đầu của con trỏ khi bắt đầu kéo
    isDragging = false, // Biến kiểm tra trạng thái kéo
    hasMoved = false, // Biến kiểm tra nếu slider đã di chuyển
    autoSlideInterval; // Biến lưu khoảng thời gian cho auto slide
  var itemWidth = sliderInner.clientWidth; // Chiều rộng của mỗi phần tử 'item'
  var totalWidth = itemWidth * sliderItems.length; // Tổng chiều rộng của tất cả phần tử 'item'
  var currentTranslate = 0, // Giá trị dịch chuyển hiện tại của 'slider-inner'
    currentIndex = 0; // Chỉ số của phần tử 'item' hiện tại

  function createDots() { // Hàm tạo các chấm chỉ mục cho slider
    var dotsMarkup = "";
    sliderItems.forEach(function (_, index) { // Duyệt qua từng phần tử 'sliderItems'
      dotsMarkup +=
        '<span class="' +
        (index === 0 ? "active" : "") + // Nếu 'index' là 0, thêm lớp 'active' cho chấm đầu tiên
        '" data-index="' +
        index +
        '"></span>';
    });
    sliderDots.innerHTML = dotsMarkup; // Gán các chấm chỉ mục vào 'slider-dots'
  }

  function updateSliderWidth() { // Hàm cập nhật chiều rộng của slider
    sliderItems.forEach(function (item) { // Duyệt qua từng phần tử 'sliderItems'
      item.style.width = itemWidth + "px"; // Cập nhật chiều rộng của từng phần tử 'item'
    });
    sliderInner.style.width = totalWidth + "px"; // Cập nhật tổng chiều rộng của 'slider-inner'
  }

  function setActiveDot(index) { // Hàm đặt chấm hiện tại là 'active' dựa trên chỉ số 'index'
    Array.from(sliderDots.children).forEach(function (dot, dotIndex) { // Duyệt qua từng phần tử con của 'slider-dots'
      dot.classList.toggle("active", dotIndex === index); // Bật/tắt lớp 'active' cho các chấm
      dot.removeEventListener("click", onDotClick); // Gỡ bỏ sự kiện 'click' cũ
      dot.addEventListener("click", function () { // Thêm sự kiện 'click' mới cho mỗi chấm
        onDotClick(dotIndex); // Gọi hàm 'onDotClick' với chỉ số của chấm
      });
    });
  }

  function slideTo(index) { // Hàm di chuyển slider đến phần tử chỉ định bởi 'index'
    currentTranslate = -itemWidth * index; // Tính toán giá trị dịch chuyển
    sliderInner.style.transition = "transform 0.5s ease"; // Thêm hiệu ứng transition
    sliderInner.style.transform = "translateX(" + currentTranslate + "px)"; // Áp dụng dịch chuyển
    setActiveDot(index); // Đặt chấm hoạt động
    currentIndex = index; // Cập nhật chỉ số hiện tại
  }

  function onDotClick(index) { // Hàm xử lý sự kiện khi chấm được click
    slideTo(index); // Di chuyển slider đến phần tử tương ứng
  }

  function onNextClick() { // Hàm xử lý sự kiện khi nhấn nút 'Next'
    if (Math.abs(currentTranslate) < totalWidth - itemWidth) { // Nếu chưa phải là phần tử cuối cùng
      slideTo(currentIndex + 1); // Di chuyển slider đến phần tử tiếp theo
    }
  }

  function onPrevClick() { // Hàm xử lý sự kiện khi nhấn nút 'Prev'
    if (currentTranslate < 0) { // Nếu chưa phải là phần tử đầu tiên
      slideTo(currentIndex - 1); // Di chuyển slider đến phần tử trước đó
    }
  }

  function onMouseDown(e) { // Hàm xử lý sự kiện khi bắt đầu kéo
    e.preventDefault(); // Ngăn chặn hành động mặc định
    isDragging = true; // Đặt trạng thái kéo
    startX = e.clientX; // Lưu vị trí ban đầu của con trỏ
    clearInterval(autoSlideInterval); // Dừng auto slide khi bắt đầu kéo
    sliderInner.style.transition = "none"; // Tắt transition khi kéo
  }

  function onMouseUp(e) { // Hàm xử lý sự kiện khi kết thúc kéo
    e.preventDefault(); // Ngăn chặn hành động mặc định
    isDragging = false; // Đặt trạng thái không kéo
    sliderInner.style.transition = "transform 0.5s ease"; // Bật lại transition khi thả chuột
    slideTo(currentIndex); // Di chuyển slider về phần tử hiện tại
    hasMoved = false; // Đặt trạng thái chưa di chuyển
    startAutoSlide(); // Bắt đầu lại auto slide khi thả chuột
  }

  function onMouseMove(e) { // Hàm xử lý sự kiện khi kéo di chuyển
    if (!isDragging) return; // Nếu không đang kéo, thoát hàm

    sliderInner.style.cursor = "move"; // Thay đổi con trỏ thành 'move'
    var dx = e.clientX - startX; // Tính toán sự dịch chuyển của con trỏ
    var moveThreshold = (10 * itemWidth) / 100; // Ngưỡng dịch chuyển để kích hoạt thay đổi

    if (Math.abs(dx) < moveThreshold) { // Nếu dịch chuyển ít hơn ngưỡng
      sliderInner.style.transform =
        "translateX(" + (currentTranslate + dx) + "px)"; // Dịch chuyển slider
      sliderInner.style.transition = "none"; // Tắt transition khi kéo
    } else {
      if (dx < 0 && Math.abs(currentTranslate) < totalWidth - itemWidth) { // Nếu kéo sang trái và chưa đến phần tử cuối cùng
        slideTo(currentIndex + 1); // Di chuyển slider đến phần tử tiếp theo
        hasMoved = true; // Đặt trạng thái đã di chuyển
      } else if (dx > 0 && currentTranslate < 0) { // Nếu kéo sang phải và chưa đến phần tử đầu tiên
        slideTo(currentIndex - 1); // Di chuyển slider đến phần tử trước đó
        hasMoved = true; // Đặt trạng thái đã di chuyển
      }
      isDragging = false; // Đặt trạng thái không kéo
    }
  }

  function startAutoSlide() { // Hàm bắt đầu auto slide
    autoSlideInterval = setInterval(function () {
      if (currentIndex < sliderItems.length - 1) { // Nếu chưa phải là phần tử cuối cùng
        slideTo(currentIndex + 1); // Di chuyển đến phần tử tiếp theo
      } else {
        slideTo(0); // Quay lại phần tử đầu tiên nếu đang ở phần tử cuối
      }
    }, 3000); // Thời gian giữa các slide, ở đây là 3 giây
  }

  function stopAutoSlide() { // Hàm dừng auto slide
    clearInterval(autoSlideInterval); // Xóa khoảng thời gian auto slide
  }

  createDots(); // Gọi hàm tạo các chấm chỉ mục
  updateSliderWidth(); // Gọi hàm cập nhật chiều rộng của slider
  setActiveDot(0); // Đặt chấm hoạt động ban đầu
  startAutoSlide(); // Bắt đầu auto slide khi trang được tải

  navNext.addEventListener("click", onNextClick); // Gán sự kiện 'click' cho nút 'Next'
  navPrev.addEventListener("click", onPrevClick); // Gán sự kiện 'click' cho nút 'Prev'
  sliderInner.addEventListener("mousedown", onMouseDown); // Gán sự kiện 'mousedown' cho 'slider-inner'
  sliderInner.addEventListener("mouseup", onMouseUp); // Gán sự kiện 'mouseup' cho 'slider-inner'
  sliderInner.addEventListener("mousemove", onMouseMove); // Gán sự kiện 'mousemove' cho 'slider-inner'

  slider.addEventListener("mouseenter", stopAutoSlide); // Tạm dừng auto slide khi di chuột vào slider
  slider.addEventListener("mouseleave", startAutoSlide); // Tiếp tục auto slide khi rời chuột khỏi slider
} -->
