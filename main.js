const nav = document.querySelector(".tabNav");

nav.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  const calcLeft = button.offsetLeft;
  nav.style.setProperty("--left", calcLeft + "px");

  const calcWidth = button.offsetWidth / nav.offsetWidth;

  nav.style.setProperty("--width", calcWidth);
});
