/* requestAnimationFrame : Xử lý khung hình trên 1 giây
 */

var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

if (audio.readyState > 0) {
  durationEl.innerText = getTime(audio.duration);
}

//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});

//Xây dựng chức năng Karaoke

//Tạo các element cơ bản
var karaoke = document.querySelector(".karaoke");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokePlay = karaoke.querySelector(".karaoke-play");
var karaokeClose = karaoke.querySelector(".close");
var karaokeContent = karaoke.querySelector(".karaoke-content");
var playerWrap = document.querySelector(".player-wrap");

//Thông tin ca sĩ và bài hát
var songName = `Cứ ngỡ là anh`;
var singerName = `Lưu Anh Quân`;

//Ẩn/hiện màn hình hát karaoke
karaokePlay.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  playerWrap.classList.add("bottom");
});

karaokeClose.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  playerWrap.classList.remove("bottom");
});

// console.log(lyric);
//Giai đoạn 1: Hiển thị các câu hát

var currentIndex;
var showSentence = false;

var renderSongInfo = function () {
  karaokeContent.innerHTML = `
  <p>${songName}</p>
  <p>${singerName}</p>
  `;
  showSentence = false;
};

renderSongInfo();

var renderSentences = function () {
  var currentTime = Math.round(audio.currentTime * 1000);

  var sentenceIndex = lyric.findIndex(function (sentence) {
    return (
      currentTime >= sentence.words[0].startTime &&
      currentTime <= sentence.words[sentence.words.length - 1].startTime
    );
  });

  //Xử lý trước khi vào hát 5 giây
  var rangeStart = Math.abs(currentTime - lyric[0].words[0].startTime);

  if (rangeStart > 0 && rangeStart < 5000) {
    sentenceIndex = 0;
  } else if (rangeStart > 5000 && currentTime < lyric[0].words[0].startTime) {
    renderSongInfo();
  } else if (
    currentTime >
    lyric[lyric.length - 1].words[lyric[lyric.length - 1].words.length - 1]
      .endTime
  ) {
    renderSongInfo();
  }

  if (sentenceIndex !== -1 && sentenceIndex !== currentIndex) {
    //Trước khi hát câu đầu tiên của bài hát
    if (sentenceIndex === 0) {
      var output = `
        <p>${getSentence(0)}</p>
        <p>${getSentence(1)}</p>
      `;
      karaokeContent.innerHTML = output;
      showSentence = true;
    } else {
      //Khi bắt đầu hát từ câu thứ 2 trở đi
      /*
      index = 1 -> Ẩn dòng đầu (0) -> Hiển thị index = 2
      index = 2 -> Ẩn dòng hai (1) -> Hiển thị index = 3
      index = 3 -> Ẩn dòng đầu (0) -> Hiển thị index = 4
      index = 4 -> Ẩn dòng hai (1) -> Hiển thị index = 5
      */

      if (!showSentence) {
        var output = `
        <p>${getSentence(sentenceIndex)}</p>
        <p>${getSentence(sentenceIndex + 1)}</p>
      `;
        karaokeContent.innerHTML = output;
        showSentence = true;
      }

      setTimeout(function () {
        if (sentenceIndex % 2 !== 0) {
          nextSentence(karaokeContent.children[0], {
            data: getSentence(sentenceIndex + 1),
          });
        } else {
          nextSentence(karaokeContent.children[1], {
            data: getSentence(sentenceIndex + 1),
          });
        }
      }, 600);
    }

    currentIndex = sentenceIndex;
  }
};

//Lấy câu hát dựa vào index của câu
function getSentence(index) {
  return (
    lyric[index]?.words
      .map?.(function (word) {
        return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.endTime}">${word.data}<span>${word.data}</span></span>`;
      })
      .join(" ") ?? ""
  );
}

//Thay đổi câu hát theo kiểu so le
function nextSentence(element, sentence) {
  element.style.transition = "opacity 0.6s ease-in-out";
  element.style.opacity = 0;

  setTimeout(function () {
    element.innerHTML = sentence.data;
    element.style.opacity = 1;
  }, 600);
}

audio.addEventListener("timeupdate", renderSentences);

//Tạo requestAnimationFrame -> Tạo hiệu ứng mượt khi xây dựng chức năng Karaoke
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleColorKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});

//Xử lý chức năng tô màu
function handleColorKaraoke() {
  var currentTime = Math.round(audio.currentTime * 1000);

  var wordEl = karaokeContent.querySelectorAll(".word");
  // thời gian cho từng từ starTime và endTime

  if (wordEl.length) {
    wordEl.forEach(function (word, index) {
      if (
        currentTime > word.dataset.startTime &&
        currentTime < word.dataset.endTime
      ) {
        //Tính phần trăm thời gian hiện tại trong 1 từ để tô màu cho chữ cái tại ví trí đó
        var percent =
          ((currentTime - word.dataset.startTime) * 100) /
          (word.dataset.endTime - word.dataset.startTime);

        word.children[0].style.width = `${percent}%`;
      }

      if (currentTime >= word.dataset.endTime) {
        word.children[0].style.width = `100%`;
      }
    });
  }

  requestId = requestAnimationFrame(handleColorKaraoke);
}
