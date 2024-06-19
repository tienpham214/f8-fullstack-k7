//DOM Navigation
/*
Chọn các element theo phân cấp: cha, con, ngang hàng (trước, sau)
- parentElement
- children
- nextElementSibling
- previousElementSibling
*/
// var menuLinkList = document.querySelectorAll("a");
// menuLinkList.forEach(function (menuLink) {
//   menuLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     // this.parentElement.classList.add("active");
//     // console.log(this.nextElementSibling);
//     var children = this.nextElementSibling.children;
//     for (var i = 0; i < children.length; i++) {
//       children[i].classList.add("children");
//     }
//   });
// });

var menuLinkList = document.querySelectorAll("a");
menuLinkList.forEach(function (menuLink) {
  var subMenu = menuLink.nextElementSibling;
  if (subMenu) {
    menuLink.parentElement.classList.add("has-children");
  }
  menuLink.addEventListener("click", function () {
    //Lấy menu active của lần mở trước
    var menuItemActive = document.querySelector(".menu li.active");
    //Thêm menu active của lần mở hiện tại
    menuLink.parentElement.classList.toggle("active");
    //Xóa menu active của lần mở trước
    if (menuItemActive) {
      menuItemActive.classList.remove("active");
    }
  });
});