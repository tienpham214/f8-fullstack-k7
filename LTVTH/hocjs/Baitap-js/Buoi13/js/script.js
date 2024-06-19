var slider = document.querySelector(".slider");
var sliderInner = slider.querySelector(".slider-inner");
var sliderNav = slider.querySelector(".slider-nav");
var sliderDots = slider.querySelector(".slider-dots");
var navNext = sliderNav.querySelector(".next");
var navPrev = sliderNav.querySelector(".prev");
var sliderItems = sliderInner.querySelectorAll(".item");

if (sliderItems.length) {
  var startX,
    isDragging = false,
    hasMoved = false,
    autoSlideInterval;
  var itemWidth = sliderInner.clientWidth;
  var totalWidth = itemWidth * sliderItems.length;
  var currentTranslate = 0,
    currentIndex = 0;

  function createDots() {
    var dotsMarkup = "";
    sliderItems.forEach(function (_, index) {
      dotsMarkup +=
        '<span class="' +
        (index === 0 ? "active" : "") +
        '" data-index="' +
        index +
        '"></span>';
    });
    sliderDots.innerHTML = dotsMarkup;
  }

  function updateSliderWidth() {
    sliderItems.forEach(function (item) {
      item.style.width = itemWidth + "px";
    });
    sliderInner.style.width = totalWidth + "px";
  }

  function setActiveDot(index) {
    Array.from(sliderDots.children).forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
      dot.removeEventListener("click", onDotClick);
      dot.addEventListener("click", function () {
        onDotClick(dotIndex);
      });
    });
  }

  function slideTo(index) {
    currentTranslate = -itemWidth * index;
    sliderInner.style.transition = "transform 0.5s ease"; // Thêm hiệu ứng transition
    sliderInner.style.transform = "translateX(" + currentTranslate + "px)";
    setActiveDot(index);
    currentIndex = index;
  }

  function onDotClick(index) {
    slideTo(index);
  }

  function onNextClick() {
    if (Math.abs(currentTranslate) < totalWidth - itemWidth) {
      slideTo(currentIndex + 1);
    }
  }

  function onPrevClick() {
    if (currentTranslate < 0) {
      slideTo(currentIndex - 1);
    }
  }

  function onMouseDown(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    clearInterval(autoSlideInterval);
    sliderInner.style.transition = "none"; // Tắt transition khi kéo
  }

  function onMouseUp(e) {
    e.preventDefault();
    isDragging = false;
    sliderInner.style.transition = "transform 0.5s ease"; // Bật lại transition khi thả chuột
    slideTo(currentIndex);
    hasMoved = false;
    startAutoSlide();
  }

  function onMouseMove(e) {
    if (!isDragging) return;

    sliderInner.style.cursor = "move";
    var dx = e.clientX - startX;
    var moveThreshold = (10 * itemWidth) / 100;

    if (Math.abs(dx) < moveThreshold) {
      sliderInner.style.transform =
        "translateX(" + (currentTranslate + dx) + "px)";
      sliderInner.style.transition = "none"; // Tắt transition khi kéo
    } else {
      if (dx < 0 && Math.abs(currentTranslate) < totalWidth - itemWidth) {
        slideTo(currentIndex + 1);
        hasMoved = true;
      } else if (dx > 0 && currentTranslate < 0) {
        slideTo(currentIndex - 1);
        hasMoved = true;
      }
      isDragging = false;
    }
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
      if (currentIndex < sliderItems.length - 1) {
        slideTo(currentIndex + 1);
      } else {
        slideTo(0);
      }
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  createDots();
  updateSliderWidth();
  setActiveDot(0);
  startAutoSlide();

  navNext.addEventListener("click", onNextClick);
  navPrev.addEventListener("click", onPrevClick);
  sliderInner.addEventListener("mousedown", onMouseDown);
  sliderInner.addEventListener("mouseup", onMouseUp);
  sliderInner.addEventListener("mousemove", onMouseMove);
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
}
