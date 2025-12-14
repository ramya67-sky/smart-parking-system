const API = "http://localhost:5000/api/auth";

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      // Save token & role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Server error");
  });
}
// SIGNUP
function signup() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  fetch(`${API}/register`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password,
      vehicleNumber: vehicleNumber.value,
      vehicleType: vehicleType.value,
      phone: phone.value,
      role: role.value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    if (data.message === "Registration successful") {
      window.location.href = "login.html";
    }
  })
  .catch(() => alert("Server error"));
}