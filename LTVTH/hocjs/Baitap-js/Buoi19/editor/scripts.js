document.addEventListener("DOMContentLoaded", function () {
  loadDraft();
  document.getElementById("editor").addEventListener("input", saveDraft);
  document.getElementById("htmlEditor").addEventListener("input", saveDraft);
});

function formatText(command) {
  document.execCommand(command, false, null);
}

function toggleFormat(command) {
  var buttonId = command + "Button";
  var button = document.getElementById(buttonId);
  if (document.queryCommandState(command)) {
    button.classList.remove("selected");
  } else {
    button.classList.add("selected");
  }
  formatText(command);
}

function changeColor() {
  var color = document.getElementById("colorPicker").value;
  document.execCommand("foreColor", false, color);
}

function changeFontSize() {
  var size = document.getElementById("fontSizePicker").value;
  document.execCommand("fontSize", false, size);
}

function insertLink() {
  var url = prompt("Enter the URL");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}

function uploadImage() {
  document.getElementById("imageUpload").click();
}

function insertImage(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = new Image();
    img.src = e.target.result;
    img.style.maxWidth = "100%"; // Ensure the image doesn't overflow the editor
    img.style.maxHeight = "300px"; // Limit the height for better display
    img.contentEditable = true;
    img.addEventListener("click", resizeImage); // Add event listener for resizing
    document.getElementById("editor").appendChild(img);
    saveDraft(); // Save the draft after inserting the image
  };
  reader.readAsDataURL(file);
}

function resizeImage(event) {
  var img = event.target;
  var newWidth = prompt("Enter new width (in pixels)", img.width);
  var newHeight = prompt("Enter new height (in pixels)", img.height);
  if (newWidth && newHeight) {
    img.style.width = newWidth + "px";
    img.style.height = newHeight + "px";
  }
}

function switchTab(tab) {
  if (tab === "text") {
    document.getElementById("editor").style.display = "block";
    document.getElementById("htmlEditor").style.display = "none";
    document.getElementById("htmlEditor").value =
      document.getElementById("editor").innerHTML;
  } else {
    document.getElementById("editor").style.display = "none";
    document.getElementById("htmlEditor").style.display = "block";
    document.getElementById("htmlEditor").value =
      document.getElementById("editor").innerHTML;
  }
  var buttons = document.querySelectorAll(".tab-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document
    .querySelector(".tab-button[onclick=\"switchTab('" + tab + "')\"]")
    .classList.add("active");
}

function updateEditorFromHtml() {
  document.getElementById("editor").innerHTML =
    document.getElementById("htmlEditor").value;
  saveDraft();
}

function newDocument() {
  document.getElementById("docTitle").value = "";
  document.getElementById("editor").innerHTML = "";
  document.getElementById("htmlEditor").value = "";
  updateCounts();
  localStorage.removeItem("draftTitle");
  localStorage.removeItem("draftContent");
}

function saveAsTxt() {
  var title = document.getElementById("docTitle").value;
  var content = document.getElementById("editor").innerText;
  var blob = new Blob([content], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = title + ".txt";
  link.click();
}

function saveAsPdf() {
  var title = document.getElementById("docTitle").value;
  var element = document.getElementById("editor");
  html2pdf()
    .from(element)
    .set({
      filename: title + ".pdf",
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait" },
    })
    .save();
}

function updateCounts() {
  var text = document.getElementById("editor").innerText;
  document.getElementById("charCount").innerText = "Số ký tự: " + text.length;
  document.getElementById("wordCount").innerText =
    "Số từ: " + text.trim().split(/\s+/).length;
}

function saveDraft() {
  var title = document.getElementById("docTitle").value;
  var content = document.getElementById("editor").innerHTML;
  localStorage.setItem("draftTitle", title);
  localStorage.setItem("draftContent", content);
}

function loadDraft() {
  var title = localStorage.getItem("draftTitle");
  var content = localStorage.getItem("draftContent");
  if (title) {
    document.getElementById("docTitle").value = title;
  }
  if (content) {
    document.getElementById("editor").innerHTML = content;
  }
}
