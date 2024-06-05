// console.log(document);
// console.dir(document.body);
// console.dir(document.head);
// document.title = "Hello anh em F8";

//Tạo Element Node --> Truy cập vào thẻ html để trả về object
// var title = document.getElementById("title");
// console.dir(title);

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

// var title = document.querySelector("#title");
// console.log(title);

var titleList = document.querySelectorAll("#title");
console.log(titleList);
Array.from(titleList).map(function (item) {
  console.log(item);
});

//DOM HTML
