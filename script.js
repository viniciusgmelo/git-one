const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", (e) => {
  e.currentTarget.style.backgroundColor = "white";
  e.currentTarget.style.color = "black";
});

h1.addEventListener("mouseleave", (e) => {
  e.currentTarget.style.backgroundColor = "black";
  e.currentTarget.style.color = "white";
});
