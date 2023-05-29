const btnRef = document.querySelector("[data-hero-btn]");
const resultRef = document.querySelector("[data-result]");
let result1 = "Hello world!";

function writeAnswer() {

  resultRef.textContent = result1;
};

btnRef.addEventListener("click", writeAnswer);