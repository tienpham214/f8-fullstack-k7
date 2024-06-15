var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var timer = progressBar.querySelector(".timer");

var isDrag = false;
var initialClientX = 0;
var initalRate = 0;
var rate = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    //   console.log(e.offsetX, progressBarWidth);
    //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
    rate = (e.offsetX * 100) / progressBarWidth;

    //Update CSS vào progress
    progress.style.width = `${rate}%`;

    initalRate = rate;

    isDrag = true;

    initialClientX = e.clientX;

    var currentTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();

  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
    //   console.log(initalRate);
    //   console.log("progress dot");
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    // console.log(space);
    rate = (space * 100) / progressBarWidth + initalRate;
    if (rate < 0) {
      rate = 0;
    }

    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;

    var currentTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTime(currentTime);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initalRate = rate;
  var currentTime = (audio.duration * rate) / 100;
  currentTimeEl.innerText = getTime(currentTime);

  audio.currentTime = currentTime;
});

/*
Khi bấm chuột xuống vào chấm màu tím
- Lấy được clientX tại ví trí bấm chuột

Khi kéo chuột
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  //   console.log(audio.duration);
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

//update thời gian bằng sự kiện timeupdate

audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    //   console.log("đang chạy: ", this.currentTime);
    currentTimeEl.innerText = getTime(this.currentTime);

    //Tính tỷ lệ phần trăm thời gian
    rate = (this.currentTime / this.duration) * 100;

    //Update vào timer thanh nhạc
    progress.style.width = `${rate}%`;
  }
});

audio.addEventListener("ended", function () {
  rate = 0;
  audio.currentTime = 0;
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
});

progressDot.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

progressBar.addEventListener("mousemove", function (e) {
  timer.style.display = "block";
  timer.style.left = `${e.offsetX}px`;
  var rate = (e.offsetX * 100) / this.clientWidth;
  var currentTime = (audio.duration * rate) / 100;
  timer.innerText = getTime(currentTime);
});

progressBar.addEventListener("mouseout", function () {
  timer.style.display = "none";
});
