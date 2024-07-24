const apiUrl = "https://api-auth-two.vercel.app";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const postForm = document.getElementById("post-form");
  const logoutButton = document.getElementById("logout-button");
  const signInButton = document.getElementById("sign-in-button");
  const showRegisterButton = document.getElementById("show-register");
  const showLoginButton = document.getElementById("show-login");

  signInButton.addEventListener("click", () => {
    document.getElementById("auth").classList.remove("hidden");
    document.getElementById("main").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("register-section").classList.add("hidden");
  });

  showRegisterButton.addEventListener("click", () => {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("register-section").classList.remove("hidden");
  });

  showLoginButton.addEventListener("click", () => {
    document.getElementById("register-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.code === 200) {
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      showMain();
    } else {
      alert(data.message);
    }
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data.code === 201) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  });

  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(`${apiUrl}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    if (data.code === 200) {
      alert(data.message);
      loadBlogs();
    } else {
      alert(data.message);
    }
  });

  logoutButton.addEventListener("click", async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    if (data.code === 200) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      showAuth();
    } else {
      alert(data.message);
    }
  });

  const showMain = () => {
    document.getElementById("auth").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("post-form").classList.remove("hidden");
    loadBlogs();
  };

  const showAuth = () => {
    document.getElementById("auth").classList.remove("hidden");
    document.getElementById("main").classList.add("hidden");
  };

  const loadBlogs = async () => {
    const response = await fetch(`${apiUrl}/blogs`);
    const data = await response.json();
    if (data.code === 200) {
      const blogsDiv = document.getElementById("blogs");
      blogsDiv.innerHTML = "";
      data.data.forEach((blog) => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");
        blogDiv.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p><small>By ${blog.userId.name}</small>`;
        blogsDiv.appendChild(blogDiv);
      });
    }
  };

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    showMain();
  } else {
    showAuth();
  }
});
