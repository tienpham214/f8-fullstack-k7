//Các thao tác của DOM HTML
/*
- Lấy nội dung của thẻ html
- Thay đổi nội dung thẻ html
- Xóa thẻ html
- Thêm, sửa, xóa thuộc tính trong thẻ html
*/
var contentEl = document.querySelector(".content");

//1. innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>Học JS không khó</h2>`;

//2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học JS không khó</h2>`;

//3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `
// <h2>Học JS không khó</h2>`;

//4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học JS không khó</h2>`;

//5. outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học JS không khó</h2>`;

var btn = document.querySelector(".btn");
var content = contentEl.innerHTML;
btn.addEventListener("click", function () {
  if (!contentEl.innerText) {
    contentEl.innerHTML = content;
    this.innerText = "Ẩn";
  } else {
    contentEl.innerText = "";
    this.innerText = "Hiện";
  }
});

var countEl = document.querySelector(".count");
var incrementBtn = document.querySelector(".increment-btn");
var decrementBtn = document.querySelector(".decrement-btn");
incrementBtn.addEventListener("click", function () {
  countEl.innerText++;
});
decrementBtn.addEventListener("click", function () {
  countEl.innerText--;
});
