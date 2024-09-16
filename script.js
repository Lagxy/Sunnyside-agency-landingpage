const hamburgerBtn = document.querySelector("#hamburger-btn");
const nav = document.querySelector("#main-nav");

hamburgerBtn.addEventListener("click", () => {
  // conditioning to avoid error
  if (nav.classList.contains("hidden") && nav.classList.contains("flex")) {
    nav.classList.remove("flex");
  }

  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
