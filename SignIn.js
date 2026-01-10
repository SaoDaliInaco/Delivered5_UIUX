const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const btn = document.querySelector("#signinBtn");

btn.addEventListener("click", () => {
  if (email.value === "" || pass.value === "") {
    alert("Please fill in all fields!");
    return;
  }
  // proceed sign in
});
