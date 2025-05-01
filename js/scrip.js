const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");


hamburger.onclick = function (e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
