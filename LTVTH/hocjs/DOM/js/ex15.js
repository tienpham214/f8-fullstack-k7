// event về scroll

//window.scrollX => lấy tọa độ so với top theo trục X
//windows.scrollY => lấy tọa độ so với top theo trục Y

// baitap 1: kéo chuột xuống đối body thành màu đỏ, kéo lên thành màu trắng

// var lastPosition = 0;
// window.addEventListener("scroll", function () {
//   var position = window.scrollY; // lấy tọa độ so với top theo trục Y

//   if (position > lastPosition) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = null;
//   }
//   lastPosition = position;
// });

//: window.scroll(option) => di chuyển thanh cuộn tới vị trí mong muốn
// bấm button thì nhảy tới vị trí 500px

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  window.scroll({
    top: 500,
    behavior: "smooth",
  });
});

//baitap2: xây dựng chức năng back to top

var topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", function () {
  var position = window.scrollY;
  if (position > 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

//bài tâp 3 nút section tab, click vào nút nào thì hiện nội dung tương ứng, khi kéo cuộn trình duyệt thì tab đó thể hiện trạng thái active

// scripts.js
// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".tab");
  var sections = document.querySelectorAll(".section");
  var tabHeight = document.querySelector(".tabs").offsetHeight;

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sectionTop = section.offsetTop - tabHeight;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  }

  function updateActiveTab(activeTab) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    activeTab.classList.add("active");
  }

  function onTabClick(event) {
    var sectionId = event.target.getAttribute("data-section");
    scrollToSection(sectionId);
    updateActiveTab(event.target);
  }

  function onScroll() {
    var currentSection = "";

    for (var i = 0; i < sections.length; i++) {
      var sectionTop = sections[i].offsetTop - tabHeight;
      var sectionHeight = sections[i].clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = sections[i].getAttribute("id");
      }
    }

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
      if (tabs[i].getAttribute("data-section") === currentSection) {
        tabs[i].classList.add("active");
      }
    }
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", onTabClick);
  }

  window.addEventListener("scroll", onScroll);
});
