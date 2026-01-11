const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const btn = document.querySelector("#signinBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // stops form from refreshing

  if (email.value.trim() === "" || pass.value.trim() === "") {
    alert("Please fill in all fields!");
    return;
  }

  // if all good → redirect
  window.location = "Welcome1.html";
});
