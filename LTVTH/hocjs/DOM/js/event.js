var inputList = document.querySelectorAll('input[type="range"]');
var finishEvent = new Event("finish");

inputList.forEach(function (input) {
  input.addEventListener("mousedown", function (e) {
    var initialRate = (e.offsetX * 100) / this.clientWidth;
    initialRate = Math.round(initialRate);
    finishEvent.initialRate = initialRate;
  });
  input.addEventListener("input", function (e) {
    var value = e.target.value;
    if (+value === 100) {
      this.dispatchEvent(finishEvent);
    }
  });
});

//dispatch là kiểu thực hiện tiếp 1 hành động tiếp diễn

// Đăng ký tài khoản
/*
- gửi email kích hoạt
- gửi thông báo cho quản trị
- gửi email cho quản trị 

handleRegister(){

    // hàm xử lý đăng ký 
    //Kiểm tra xem đăng ký thành công hay ko 
    //dispatchEvent: Registered
    
}

File khác: 
Listen Event Registered
    sendEmailActive();
    sendNotificationAdmin();
    sendEmailToAdmin();


VD Tính năng thanh toán có quy trình:
- Thêm sản phẩm vào giỏ hàng => dispatch 1 event
- Vào trang thanh toán  => dispatch 1 event
- Submit form => dispatch 1 event 
- Thanh toán thành công => dispatch 1 event
- Thanh toán thất bại => dispatch 1 event
*/
