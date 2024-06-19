var countdownTimer;
var countdownSeconds = 1;

function startRecognition() {
  clearTimeout(countdownTimer);
  document.getElementById("startButton").disabled = true;

  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  recognition.onstart = function () {
    console.log("Voice recognition started. Speak into the microphone.");
    document.getElementById("transcript").innerText = "Đang nghe...";
    document.getElementById("suggestions").innerText = "";
    document.getElementById("confirmation").innerText = "";
  };

  recognition.onspeechend = function () {
    console.log("Voice recognition ended.");
    recognition.stop();
  };

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Transcript: ", transcript);
    document.getElementById("transcript").innerText =
      "Bạn vừa nói: " + transcript;
    processCommand(transcript);
  };

  recognition.start();
}

function processCommand(transcript) {
  var message = "";
  var url = "";

  if (transcript.includes("google")) {
    message = "Mở Google";
    url = "https://www.google.com";
  } else if (transcript.includes("facebook")) {
    message = "Mở Facebook";
    url = "https://www.facebook.com";
  } else if (transcript.includes("youtube")) {
    message = "Mở YouTube";
    url = "https://www.youtube.com";
  } else if (transcript.includes("google drive")) {
    message = "Mở Google Drive";
    url = "https://drive.google.com";
  } else if (
    transcript.includes("google maps") ||
    transcript.includes("bản đồ")
  ) {
    message = "Mở Google Maps";
    url = "https://maps.google.com";
  } else if (transcript.startsWith("chỉ đường tới")) {
    var location = transcript.replace("chỉ đường tới", "").trim();
    message = `Chỉ đường tới ${location}`;
    url = `https://maps.google.com?q=${encodeURIComponent(location)}`;
  } else if (
    transcript.includes("bài hát ") ||
    transcript.includes("mở bài hát ") ||
    transcript.includes("nghe bài hát ")
  ) {
    var song =
      transcript.split("bài hát ")[1] ||
      transcript.split("mở bài hát ")[1] ||
      transcript.split("nghe bài hát ")[1];
    if (song) {
      message = `Mở bài hát ${song.trim()}`;
      url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(
        song.trim()
      )}`;
    } else {
      showSuggestions();
      return;
    }
  } else if (transcript.startsWith("mở video")) {
    var video = transcript.replace("mở video", "").trim();
    message = `Mở video ${video}`;
    url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      video
    )}`;
  } else {
    showSuggestions();
    return;
  }

  showConfirmation(message, url);
}

function showSuggestions() {
  var suggestions = `
        Lệnh không hợp lệ hoặc không được hỗ trợ. Vui lòng thử các lệnh sau:
        <ul>
            <li>"Google" để mở Google</li>
            <li>"Facebook" để mở Facebook</li>
            <li>"YouTube" để mở YouTube</li>
            <li>"Google Drive" để mở Google Drive</li>
            <li>"Google Maps" hoặc "Bản đồ" để mở Google Maps</li>
            <li>"Chỉ đường tới [địa điểm]" để chỉ đường tới một địa điểm cụ thể</li>
            <li>"Bài hát [tên bài hát]" hoặc "Mở bài hát [tên bài hát]" để tìm kiếm bài hát trên Zing MP3</li>
            <li>"Mở video [tên video]" để tìm kiếm video trên YouTube</li>
        </ul>
    `;
  document.getElementById("suggestions").innerHTML = suggestions;
  document.getElementById("confirmation").innerText = "";
  document.getElementById("startButton").disabled = false;
}

function showConfirmation(message, url) {
  var seconds = countdownSeconds;
  document.getElementById(
    "confirmation"
  ).innerHTML = `${message}<br>Thực hiện sau <span id="countdown">${seconds}</span> giây...`;

  countdownTimer = setInterval(() => {
    seconds--;
    document.getElementById("countdown").innerText = seconds;
    if (seconds <= 0) {
      clearInterval(countdownTimer);
      window.open(url, "_blank");
      document.getElementById("startButton").disabled = false;
    }
  }, 1000);
}
