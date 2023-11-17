import { userAnswer, numberInput } from "./main.js";

let maxNumber = randomMax(1000);
let maxTries = 3;

let state = {
  tries: 1,
  numberToGuess: randomInt(maxNumber),
};

function randomMax(max) {
  let randomNumber = Math.random();
  return Math.floor(randomNumber * max);
}

function randomInt(maxNumber) {
  let randomNumber = Math.random();
  return Math.floor(randomNumber * maxNumber);
}

function webGuess(userAnswer) {
  let responseBlock = document.querySelector("#response");
  let message;
  if (parseInt(userAnswer) < state.numberToGuess) {
    if (state.tries === maxTries) {
      message = `Vous avez atteint le nombre d'essais maximal. Il s'agissait de ${state.numberToGuess}`;
      newGame();
    } else {
      message = "Le nombre recherché est plus grand !";
      numberInput.value = "";
    }
  } else if (parseInt(userAnswer) > state.numberToGuess) {
    if (state.tries === maxTries) {
      message = `Vous avez atteint le nombre d'essais maximal. Il s'agissait de ${state.numberToGuess}`;
      newGame();
    } else {
      message = "Le nombre recherché est plus petit !";
      numberInput.value = "";
    }
  } else if (parseInt(userAnswer) === state.numberToGuess) {
    message = `Bravo, vous avez trouvé le nombre exact. Il s'agissait bien de ${state.numberToGuess}`;
    newGame();
  } else {
    message = "Erreur technique";
  }
  responseBlock.innerHTML = message;
  state.tries++;
}

function newGame() {
  state.tries = 1;
  state.numberToGuess = randomInt(maxNumber);
}

export { webGuess };
