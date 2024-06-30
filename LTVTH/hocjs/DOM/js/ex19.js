//Tạo shadow root từ shadow host
var box = document.querySelector(".box");
// var style = document.createElement("style");
// style.textContent = `
// h1 {color: red;}
// `;

var shadowRoot = box.attachShadow({ mode: "closed" });
var h1 = document.createElement("h1");
h1.innerText = `F8- Học lập trình để đi làm`;
shadowRoot.append(h1);
var style = document.createElement("style");
var style = document.createElement("style");
style.textContent = `
  h1 {color: red;}`;

shadowRoot.append(style);

/* Buổi sau: tìm hiểu
- template
-  slot
- custom attribute

AIpine.js
*/
