function startRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  recognition.onstart = function () {
    console.log("Voice recognition started. Speak into the microphone.");
  };

  recognition.onspeechend = function () {
    console.log("Voice recognition ended.");
    recognition.stop();
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Transcript: ", transcript);

    if (transcript.includes("google")) {
      window.open("https://www.google.com", "_blank");
    } else if (transcript.includes("facebook")) {
      window.open("https://www.facebook.com", "_blank");
    } else if (transcript.includes("youtube")) {
      window.open("https://www.youtube.com", "_blank");
    } else if (transcript.includes("google drive")) {
      window.open("https://drive.google.com", "_blank");
    } else if (
      transcript.includes("google maps") ||
      transcript.includes("bản đồ")
    ) {
      window.open("https://maps.google.com", "_blank");
    } else if (transcript.startsWith("chỉ đường tới")) {
      const location = transcript.replace("chỉ đường tới", "").trim();
      window.open(
        `https://maps.google.com?q=${encodeURIComponent(location)}`,
        "_blank"
      );
    } else if (
      transcript.includes("bài hát") ||
      transcript.includes("mở bài hát") ||
      transcript.includes("nghe bài hát")
    ) {
      const song =
        transcript.split("bài hát ")[1] ||
        transcript.split("mở bài hát ")[1] ||
        transcript.split("nghe bài hát ")[1];
      if (song) {
        window.open(
          `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(
            song.trim()
          )}`,
          "_blank"
        );
      } else {
        alert("Không thể nhận diện tên bài hát.");
      }
    } else if (transcript.startsWith("mở video")) {
      const video = transcript.replace("mở video", "").trim();
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          video
        )}`,
        "_blank"
      );
    } else {
      alert("Lệnh không hợp lệ hoặc không được hỗ trợ.");
    }
  };

  recognition.start();
}
