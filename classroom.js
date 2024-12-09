const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signinBtn = document.getElementById("signin-btn");
const signupBtn = document.getElementById("signup-btn"); // Sign-Up button
const logoutBtn = document.getElementById("logout-btn");
const errorMessage = document.getElementById("error-message");
const signinSection = document.getElementById("signin-section");
const dashboardSection = document.getElementById("dashboard-section");

// Helper Functions
function validateGmail(email) {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

function saveUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return false;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

function validateUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some((user) => user.email === email && user.password === password);
}

function showSection(section) {
  signinSection.classList.add("hidden");
  dashboardSection.classList.add("hidden");
  section.classList.remove("hidden");
}

// Sign-Up Functionality
signupBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!validateGmail(email)) {
    errorMessage.textContent = "Enter a valid Gmail address!";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long!";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (saveUser(email, password)) {
    errorMessage.textContent = "Registration successful! You can now sign in.";
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Email is already registered!";
    errorMessage.classList.remove("hidden");
  }
});

// Sign-In Functionality
signinBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!validateGmail(email)) {
    errorMessage.textContent = "Enter a valid Gmail address!";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long!";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (validateUser(email, password)) {
    localStorage.setItem("user", email); // Store the logged-in user
    errorMessage.classList.add("hidden");
    showSection(dashboardSection);
  } else {
    errorMessage.textContent = "Invalid email or password!";
    errorMessage.classList.remove("hidden");
  }
});

// Logout Functionality
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  emailInput.value = "";
  passwordInput.value = "";
  errorMessage.classList.add("hidden");
  showSection(signinSection);
});

// Initial Load
const savedUser = localStorage.getItem("user");
if (savedUser) {
  showSection(dashboardSection);
} else {
  showSection(signinSection);
}
