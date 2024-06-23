var input = document.querySelector("input");

const beforeUnloadHandler = (event) => {
  //recommended
  event.preventDefault();
  event.returnValue = true;
};

// input.addEventListener("input", function (e) {
//   //lấy giá trị cũ
//   var defaultValue = e.target.defaultValue;
//   var value = e.target.value;
//   if (defaultValue !== value) {
//     window.addEventListener("beforeunload", beforeUnloadHandler);
//   } else {
//     window.removeEventListener("beforeunload", beforeUnloadHandler);
//   }
// });

//thiết lập cảnh báo cho cả form thay vì một ô input dữ liệu
var form = document.querySelector("form");
form.addEventListener("input", function (e) {
  var defaultValue = e.target.defaultValue;
  var value = e.target.value;
  if (defaultValue !== value) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
