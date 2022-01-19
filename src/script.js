const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    email.classList.remove("border-[#c2d3ff]");
    email.classList.add("border-[#ff5263]");
    errorMessage.classList.remove("hidden");
  } else {
    email.classList.add("border-[#c2d3ff]");
    email.classList.remove("border-[#ff5263]");
    errorMessage.classList.add("hidden");
  }
});
