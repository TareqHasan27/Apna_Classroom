// DOM Elements
const logoutBtn = document.getElementById("logout-btn");
const addClassBtn = document.getElementById("add-class-btn");
const modal = document.getElementById("class-modal");
const closeModal = document.getElementById("close-modal");
const createClassBtn = document.getElementById("create-class-btn");
const joinClassBtn = document.getElementById("join-class-btn");

// Logout Functionality
logoutBtn.addEventListener("click", () => {
  // Clear user data from localStorage
  localStorage.removeItem("user");
  // Redirect to login page (or reload)
  location.reload();
});

// Open Modal on + Button Click
addClassBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Create Class Button Click
createClassBtn.addEventListener("click", () => {
  alert("Redirecting to Create Class Page...");
  // Redirect or load Create Class functionality
  modal.classList.add("hidden");
});

// Join Class Button Click
joinClassBtn.addEventListener("click", () => {
  alert("Redirecting to Join Class Page...");
  // Redirect or load Join Class functionality
  modal.classList.add("hidden");
});
