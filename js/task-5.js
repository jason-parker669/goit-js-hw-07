function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", (event) => { 
  const newBackground = getRandomHexColor();
  bodyColor.style.backgroundColor = newBackground; 
  spanColor.textContent = newBackground;
})