// Sélecteurs & Click Event

// document.querySelector("h4").style.background = "yellow";
// ou l'assigner a une variable genre constr = docum...

const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
console.log(response);

questionContainer.addEventListener("click", () => {
  // Pas de point car on parle déja de class dans classList
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// Priorité CSS : id > class > balise

// Evénement souris
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", (e) => {
  // Bien réajouter les élement du transform car sa l'écrase
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", (e) => {
  mousemove.style.transform = "scale(1) translate(-25%, -25%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 1)";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// KeyPress Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "Enter") ring(e.key);
});

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// Input Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo;
let language;

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Pas besoin de déclaré car il connait
  if (cgv.checked) {
  } else {
    alert("Veuillez accepter les CGV");
  }
});
