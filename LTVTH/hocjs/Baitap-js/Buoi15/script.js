function startRecognition() {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  recognition.onstart = function () {
    console.log("Voice recognition started. Speak into the microphone.");
  };

  recognition.onspeechend = function () {
    console.log("Voice recognition ended.");
    recognition.stop();
  };

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript.toLowerCase();
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
      var location = transcript.replace("chỉ đường tới", "").trim();
      window.open(`https://maps.google.com?q=${location}`, "_blank");
    } else if (transcript.startsWith("bài hát")) {
      var song = transcript.replace("bài hát", "").trim();
      window.open(`https://zingmp3.vn/search?q=${song}`, "_blank");
    } else if (transcript.startsWith("mở video")) {
      var video = transcript.replace("mở video", "").trim();
      window.open(
        `https://www.youtube.com/results?search_query=${video}`,
        "_blank"
      );
    } else {
      alert("Lệnh không hợp lệ hoặc không được hỗ trợ.");
    }
  };

  recognition.start();
}
