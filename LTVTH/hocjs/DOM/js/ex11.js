var root = document.querySelector("#root");

//tạo element
var h1 = document.createElement("h1");
h1.innerText = `HỌC LẬP TRÌNH KO KHÓ`;
h1.className = `title`;
h1.id = "title";
h1.addEventListener("click", function () {
  this.style.color = `red`;
});
// h1: node element
//việc cần làm là đưa node element vào cây DOM( xác định vị trí cần đưa vào ), một node khi đã sử dụng rồi thì ko chạy lại lần nữa, trừ khi nhân bản nôi dung và chạy lại lần 2

root.append(h1); // chèn xuống dưới

var h2 = document.createElement("h2");
h2.innerText = `Học lập trình JS`;
root.prepend(h2); //chèn lên trên

// cho thẻ a nằm trong thẻ h1, thì phải cho là h1.append(a);
var a = document.createElement("a");
a.href = "https://f8.vn";
a.innerText = `F8`;
h1.append(a);

//baitap1:

//1. Thêm đoạn html sau dưới cùng của #root
//2. click vào button "Add" => thêm mới li số thứ tự tăng dần
/*
<ul class = "menu">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>

</ul>

<button>Add </button>
*/

var ul = document.createElement("ul");
ul.className = `menu`;
root.append(ul);

for (var i = 1; i <= 4; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.append(li);
}
root.append(ul);

var button = document.createElement("button");
button.innerText = "Add";
button.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = `Item ${i++}`;
  ul.append(li);
});
root.append(button);

var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerText = "Insert Before";
insertBeforeBtn.addEventListener("click", function () {
  var h3 = document.createElement("h3");
  h3.innerText = `TIEN`;
  root.insertBefore(h3, h1);

  //chèn 1 thẻ p vào sau h1
  var nextElementH1 = h1.nextElementSibling;
  var p = document.createElement("p");
  p.innerText = "JAVSCRIPTS";
  if (!nextElementH1) {
    root.append(p);
  } else {
    root.insertBefore(p, nextElementH1);
  }
});

root.append(insertBeforeBtn);

var updateNoteBtn = document.createElement("button");
updateNoteBtn.innerText = `Update Note`;
updateNoteBtn.addEventListener("change", function () {
  var h2 = document.createElement("h2");
  h2.innerText = `node thay thế`;
  root.replaceChild(h2, h1);
  root.removeChild(ul);
});
root.append(updateNoteBtn);
