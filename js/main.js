import { webGuess } from "./game.js";

let form = document.querySelector("form");
let numberInput = document.querySelector("#number");
let userAnswer;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userAnswer = numberInput.value;
  webGuess(userAnswer);
});

export { userAnswer, numberInput };
