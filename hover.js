const img1 = document.getElementById("hoverImg1");
const img2 = document.getElementById("hoverImg2");

img1.addEventListener(
  "mouseenter",
  function () {
    this.src = "img1.jpg";
  },
  true
);

img2.addEventListener(
  "mouseleave",
  function () {
    this.src = "img2.jpg";
  },
  false
);
