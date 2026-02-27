function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}
window.addEventListener("scroll", () => {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});
document.addEventListener("click", (event) => {
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navLinks.classList.remove("active");
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});