var content = `<h1>Học lập trình
 không khó. Học lập trình
 không khó</h1>`;
var keyword = "TRÌNH";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

// var content1 = content.slice(0, position);
// console.log(content1);

// var content2 = `<span>${content.slice(
//   position,
//   position + keyword.length
// )}</span>`;
// console.log(content2);

// var content3 = content.slice(position + keyword.length);
// console.log(content3);

// content = content1 + content2 + content3;

var output = "";
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

// content = output + content;
output += content;

document.body.innerHTML = output;
/*
Ý tưởng
- B1: Tìm vị trí keyword
- B2: Tách chuỗi để thêm span vào keyword
- B3: Cắt bỏ chuỗi từ đầu đến hết keyword và lưu lại vào 1 biến
- B4: Lặp lại bước 1
*/
