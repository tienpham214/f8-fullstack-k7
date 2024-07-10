const serverApi = `http://localhost:3000`;

const getUsers = async () => {
  try {
    const response = await fetch(serverApi + "/users");
    const users = await response.json();
    renderTable(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
const addUser = async (data) => {
  try {
    const response = await fetch(serverApi + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const renderTable = (users) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email, status }, index) => `<tr>
        <td>${index + 1}</td>
        <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>
            <span class="badge bg-${
              status === "active" ? "success" : "warning"
            }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span>
        </td>
        <td><button class="btn btn-warning">Sửa</button></td>
        <td><button class="btn btn-danger">Xóa</button></td>
        </tr>`
    )
    .join("")}`;
};
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    const status = await addUser(formData);

    if (status) {
      getUsers();
      form.reset();
    } else {
      alert("Thêm thất bại");
    }
  });
};

getUsers();
addEventFormSubmit();
