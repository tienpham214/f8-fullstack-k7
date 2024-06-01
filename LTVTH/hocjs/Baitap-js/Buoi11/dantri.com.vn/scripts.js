//JS form đăng nhập
document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("loginBtn");
  var formContainer = document.getElementById("loginFormContainer");
  var closeFormBtn = document.getElementById("closeFormBtn");
  var loginTab = document.getElementById("loginTab");
  var registerTab = document.getElementById("registerTab");
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");
  var loginEmailError = document.getElementById("loginEmailError");
  var loginPasswordError = document.getElementById("loginPasswordError");
  var togglePassword = document.getElementById("togglePassword");
  var submitBtn = document.querySelector(".submit-btn");

  loginBtn.addEventListener("click", function () {
    formContainer.classList.remove("hidden");
  });

  closeFormBtn.addEventListener("click", function () {
    formContainer.classList.add("hidden");
    clearFormFields();
  });

  document.addEventListener("click", function (event) {
    if (
      !formContainer.contains(event.target) &&
      !loginBtn.contains(event.target)
    ) {
      formContainer.classList.add("hidden");
      clearFormFields();
    }
  });

  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  registerTab.addEventListener("click", function () {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  function validateField(field, errorElement, regex = null) {
    if (field.value.trim() === "") {
      errorElement.textContent = "Vui lòng nhập thông tin";
      errorElement.style.display = "block";
      return false;
    } else if (regex && !regex.test(field.value.trim())) {
      errorElement.textContent = "Thông tin không hợp lệ";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  loginEmail.addEventListener("blur", function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(loginEmail, loginEmailError, emailRegex);
  });

  loginPassword.addEventListener("blur", function () {
    validateField(loginPassword, loginPasswordError);
  });

  togglePassword.addEventListener("click", function () {
    var type =
      loginPassword.getAttribute("type") === "password" ? "text" : "password";
    loginPassword.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var isEmailValid = validateField(loginEmail, loginEmailError);
    var isPasswordValid = validateField(loginPassword, loginPasswordError);

    if (isEmailValid && isPasswordValid) {
      console.log("Form is valid. Submitting...");
    }
  });

  function clearFormFields() {
    loginEmail.value = "";
    loginPassword.value = "";
    loginEmailError.style.display = "none";
    loginPasswordError.style.display = "none";
  }

  formContainer.addEventListener("click", function (event) {
    if (event.target === formContainer) {
      formContainer.classList.add("hidden");
      clearFormFields();
    }
  });
});

//JS form đăng ký
document.addEventListener("DOMContentLoaded", function () {
  var registerForm = document.getElementById("registerForm");
  var fullName = document.getElementById("fullName");
  var registerEmail = document.getElementById("registerEmail");
  var registerPassword = document.getElementById("registerPassword");
  var fullNameError = document.getElementById("fullNameError");
  var registerEmailError = document.getElementById("registerEmailError");
  var registerPasswordError = document.getElementById("registerPasswordError");
  var toggleRegisterPassword = document.getElementById(
    "toggleRegisterPassword"
  );
  var registerBtn = document.getElementById("registerBtn");

  function validateField(
    field,
    errorElement,
    regex = null,
    customMessage = null
  ) {
    if (field.value.trim() === "") {
      errorElement.textContent = "Vui lòng nhập thông tin";
      errorElement.style.display = "block";
      return false;
    } else if (regex && !regex.test(field.value.trim())) {
      errorElement.textContent = customMessage || "Thông tin không hợp lệ";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  fullName.addEventListener("blur", function () {
    var existingNames = ["JohnDoe", "JaneDoe"]; // Example existing names
    if (existingNames.includes(fullName.value.trim())) {
      fullNameError.textContent =
        "Tên đăng nhập đã tồn tại, vui lòng đăng ký tên đăng nhập khác";
      fullNameError.style.display = "block";
    } else {
      validateField(fullName, fullNameError);
    }
  });

  registerEmail.addEventListener("blur", function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(registerEmail, registerEmailError, emailRegex);
  });

  registerPassword.addEventListener("blur", function () {
    validateField(registerPassword, registerPasswordError);
    if (registerPassword.value.trim().length < 8) {
      registerPasswordError.textContent = "Mật khẩu phải có ít nhất 8 ký tự";
      registerPasswordError.style.display = "block";
    }
  });

  toggleRegisterPassword.addEventListener("click", function () {
    var type =
      registerPassword.getAttribute("type") === "password"
        ? "text"
        : "password";
    registerPassword.setAttribute("type", type);
    toggleRegisterPassword.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

  registerBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var isFullNameValid = validateField(fullName, fullNameError);
    var isEmailValid = validateField(registerEmail, registerEmailError);
    var isPasswordValid = validateField(
      registerPassword,
      registerPasswordError
    );

    if (isFullNameValid && isEmailValid && isPasswordValid) {
      console.log("Form is valid. Submitting...");
      // Here you would typically handle the form submission, e.g., sending data to a server
    }
  });
});
