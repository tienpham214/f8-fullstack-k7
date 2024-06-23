//Web component

/*
Web component sẽ chia các thành phần trang web thành các thẻ html riêng biệt, dễ dàng tái sử dụng 

- header
- footer
- product

Khi nào cần tách web component :
+ khi cần sử dụng ở nhiều nơi
+ linh hoạt (chỉ cần gọi thẻ html)
+ logic, giao diện phức tạp 


- CÁC BƯỚC ĐỊNH NGHĨA COMPONENT
1. Xây dựng class tương ứng, kế thừa HTMLElement
2. xác định logic cần có trong component
3. đăng ký thẻ html. Lưu ý tên thẻ phải có 2 từ và nối bằng gạch ngang

Lifecycle Callback
- vòng đời khi 1 component được tạo ra đến khi nó bị loại bỏ khỏi DOM
- 3 GIAI đoạn:
+ khởi tọa 
+ cập nhật
+ loại bỏ


Khi làm việc với Web component  => giải quyết đc vấn đề css (Scope stylesheet) => shadow DOM
*/

class TodoApp extends HTMLElement {
  // static observedAttributes = ["data-count"];
  connectedCallback() {
    this.render();

    this.innerHTML = `<h1> Todo App </h1>
   <ul>
   <li>To do 1 </li>
   <li>To do 2 </li>
   <li>To do 3 </li>
   </ul>
   
   <form>
   <input type ="text">
   placeholder ="Name..."/>
   <button type="submit">Add</button> 
   </form>`;
  }

  addEvent() {
    var form = this.querySelector("form");
    var _this = this;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      _this.preventDefault;
    });
  }

  //   disconnectedCallback() {
  //     console.log("component được loại bỏ khỏi DOM");
  //   }

  //   attributeChangeCallback(name, oldValue, newValue) {
  //     console.log(
  //       `thay đổi thuộc tính ${name}, giá trị cũ ${oldValue}, giá trị mới ${newValue} `
  //     );
  //   }
}

// customElements.define("todo-app", TodoApp);

// var btn = document.querySelector(".btn");
// var todoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//   //   todoAppEl.remove();
//   todoAppEl.dataset.count++;
// });
