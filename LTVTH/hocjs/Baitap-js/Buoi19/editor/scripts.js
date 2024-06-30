// script.js
document.addEventListener("DOMContentLoaded", function () {
  const fileButton = document.getElementById("fileButton");
  const fileMenu = document.getElementById("fileMenu");
  const editor = document.getElementById("editor");
  const fileNameInput = document.getElementById("fileName");
  const wordCount = document.getElementById("wordCount");
  const colorPicker = document.getElementById("colorPicker");

  fileButton.addEventListener("click", function () {
    fileMenu.style.display =
      fileMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (
      !fileButton.contains(event.target) &&
      !fileMenu.contains(event.target)
    ) {
      fileMenu.style.display = "none";
    }
  });

  document.getElementById("boldButton").addEventListener("click", function () {
    document.execCommand("bold");
  });

  document
    .getElementById("underlineButton")
    .addEventListener("click", function () {
      document.execCommand("underline");
    });

  document
    .getElementById("italicButton")
    .addEventListener("click", function () {
      document.execCommand("italic");
    });

  colorPicker.addEventListener("input", function () {
    document.execCommand("foreColor", false, colorPicker.value);
  });

  document.getElementById("newFile").addEventListener("click", function () {
    editor.innerHTML = "";
    fileNameInput.value = "untitled";
    updateWordCount();
  });

  document.getElementById("saveTxt").addEventListener("click", function () {
    const textContent = editor.innerText;
    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileNameInput.value + ".txt";
    link.click();
  });

  document.getElementById("savePdf").addEventListener("click", function () {
    html2pdf()
      .from(editor)
      .save(fileNameInput.value + ".pdf");
  });

  editor.addEventListener("input", updateWordCount);

  function updateWordCount() {
    const text = editor.innerText.trim();
    const numChars = text.length;
    const numWords = text.split(/\s+/).filter(function (word) {
      return word.length > 0;
    }).length;
    wordCount.textContent = `Số ký tự: ${numChars} | Số từ: ${numWords}`;
  }
});
