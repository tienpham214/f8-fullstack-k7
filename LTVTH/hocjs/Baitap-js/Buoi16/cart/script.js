const productData = [
  { productId: 1, productName: "Sản phẩm 1", productPrice: 1000 },
  { productId: 2, productName: "Sản phẩm 2", productPrice: 2000 },
  { productId: 3, productName: "Sản phẩm 3", productPrice: 3000 },
  { productId: 4, productName: "Sản phẩm 4", productPrice: 4000 },
];

function renderProductList() {
  const tbody = document.querySelector("#product_table tbody");
  tbody.innerHTML = "";
  productData.forEach((item, index) => {
    const productItem = `
          <tr>
              <td>${index + 1}</td>
              <td>${item.productName}</td>
              <td>${item.productPrice}</td>
              <td>
                  <input type="number" id="quantity_${
                    item.productId
                  }" value="1" min="1" style="width: 50px; display: inline-block; margin-right: 10px;">
                  <button type="button" id="add_to_cart_${
                    item.productId
                  }">Thêm vào giỏ</button>
              </td>
          </tr>
      `;
    tbody.innerHTML += productItem;
  });
  addEventListenersToButtons();
  addInputValidation();
}

function addEventListenersToButtons() {
  const addToCartButtons = document.querySelectorAll("#product_table button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.id.replace("add_to_cart_", ""));
      const quantityId = `#quantity_${productId}`;
      var quantityValue = parseInt(document.querySelector(quantityId).value);

      if (isNaN(quantityValue) || quantityValue < 1) {
        alert("Vui lòng nhập một số hợp lệ.");
        document.querySelector(quantityId).value = 1;
        return;
      }

      addToCart(productId, quantityValue);
    });
  });
}

function addInputValidation() {
  const quantityInputs = document.querySelectorAll(
    "#product_table input[type='number']"
  );
  quantityInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (isNaN(this.value) || this.value < 1) {
        alert("Vui lòng nhập một số hợp lệ.");
        this.value = 1;
      }
    });
  });
}

function addToCart(productId, quantity) {
  var cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
  const existingProductIndex = cartData.findIndex(
    (item) => item.productId === productId
  );
  if (existingProductIndex !== -1) {
    cartData[existingProductIndex].quantity += quantity;
  } else {
    cartData.push({ productId, quantity });
  }
  sessionStorage.setItem("cart", JSON.stringify(cartData));
  renderCart();
}

function getProductById(id) {
  return productData.find((item) => item.productId === id);
}

function renderCart() {
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
  const cartContainer = document.querySelector("#cart_data");
  if (cartData.length > 0) {
    var cartTable = `
          <table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">
              <thead>
                  <tr>
                      <th width="5%">STT</th>
                      <th>Tên sản phẩm</th>
                      <th width="20%">Giá</th>
                      <th width="20%">Số lượng</th>
                      <th width="20%">Thành tiền</th>
                      <th width="5%">Xoá</th>
                  </tr>
              </thead>
              <tbody>
      `;
    var totalQuantity = 0;
    var totalAmount = 0;
    cartData.forEach((cartItem, index) => {
      const product = getProductById(cartItem.productId);
      const amount = product.productPrice * cartItem.quantity;
      totalQuantity += cartItem.quantity;
      totalAmount += amount;
      cartTable += `
              <tr>
                  <td>${index + 1}</td>
                  <td>${product.productName}</td>
                  <td>${product.productPrice}</td>
                  <td><input type="number" class="quantity" data-id="${
                    cartItem.productId
                  }" value="${
        cartItem.quantity
      }" min="1" style="width: 50px;"></td>
                  <td>${amount}</td>
                  <td><button type="button" class="devare-item">Xoá</button></td>
              </tr>
          `;
    });
    cartTable += `
              <tr>
                  <td colspan="3">Tổng</td>
                  <td>${totalQuantity}</td>
                  <td colspan="2">${totalAmount}</td>
              </tr>
          </tbody>
          </table><hr/>
          <div class="actions">
              <button type="button" id="update_cart">Cập nhật giỏ hàng</button>
              <button type="button" id="devare_cart">Xoá giỏ hàng</button>
          </div>
      `;
    cartContainer.innerHTML = cartTable;
    addCartEventListeners();
    addCartInputValidation(); // Add validation for inputs in the cart
  } else {
    cartContainer.innerHTML =
      "<div class='empty-cart'>Giỏ hàng không có sản phẩm</div>";
  }
}

function addCartEventListeners() {
  document.querySelector("#update_cart").addEventListener("click", updateCart);
  document.querySelector("#devare_cart").addEventListener("click", devareAll);
  document.querySelectorAll(".devare-item").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(
        this.parentElement.parentElement.querySelector(".quantity").dataset.id
      );
      devareCartItem(productId);
    });
  });
}

function addCartInputValidation() {
  const quantityInputs = document.querySelectorAll(
    "#cart_table input[type='number']"
  );
  quantityInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (isNaN(this.value) || this.value < 1) {
        alert("Vui lòng nhập một số hợp lệ.");
        this.value = 1;
      }
    });
  });
}

function updateCart() {
  const cartItems = document.querySelectorAll("#cart_table tbody .quantity");
  var cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
  cartItems.forEach((item) => {
    const productId = parseInt(item.dataset.id);
    var quantity = parseInt(item.value);
    if (quantity < 1 || isNaN(quantity)) {
      quantity = 1;
      item.value = 1;
    }
    const productIndex = cartData.findIndex(
      (cartItem) => cartItem.productId === productId
    );
    if (productIndex !== -1) {
      cartData[productIndex].quantity = quantity;
    }
  });
  sessionStorage.setItem("cart", JSON.stringify(cartData));
  alert("Cập nhật giỏ hàng thành công");
  renderCart();
}

function devareCartItem(productId) {
  var cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
  cartData = cartData.filter((cartItem) => cartItem.productId !== productId);
  sessionStorage.setItem("cart", JSON.stringify(cartData));
  alert("Xoá sản phẩm thành công");
  renderCart();
}

function devareAll() {
  if (confirm("Are you sure?")) {
    sessionStorage.removeItem("cart");
    alert("Xoá giỏ hàng thành công");
    renderCart();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProductList();
  renderCart();
});
