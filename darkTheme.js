let html = document;
let icon = document.getElementById("darkmodeIcon");

// Change icon on dark/light theme
icon.addEventListener("click", () => {
  html.documentElement.classList.toggle("dark");
  if (html.documentElement.classList.contains("dark")) {
    icon.src = "assets/images/icon-sun.svg";
  } else {
    icon.src = "assets/images/icon-moon.svg";
  }
});
