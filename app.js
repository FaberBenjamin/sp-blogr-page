let topics = document.getElementById("topics_container");
let buttons = document.getElementById("buttons_container");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  topics.classList.toggle("active");
  buttons.classList.toggle("active");
  topics.classList.toggle("hidden");
  buttons.classList.toggle("hidden");
  setHamburger();
});

console.log(topics);

function setHamburger() {
  if (topics.classList.contains("active")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
}
