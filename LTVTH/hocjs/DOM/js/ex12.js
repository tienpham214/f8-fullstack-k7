var root = document.querySelector("#root");
//text node
var h1 = document.createElement("h1");
var textNode = document.createTextNode(0);
h1.innerText = `Count: `;
var button = document.createElement("button");
button.innerText = "click me";
button.addEventListener("click", function () {
  textNode.data++;
});
root.append(h1);
root.append(button);

//comment node
var comment = document.createElement("Hello");
root.append(comment);

//XSS

/*
cách xử lý lỗi bảo mật XSS: xử lý chuỗi bằng cách chuyển : <, >  thành html entities
cách 2 là tạo các element bằng document . creatElement sau đó dựa vào nội dung innerText
*/
