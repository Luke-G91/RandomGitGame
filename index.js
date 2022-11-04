const prompt = require('prompt-sync')();

//generates number 1-1000
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  return randomNumber;
}

//checks what the guess is compared to the answer
function differenceFromAnswer(guess, answer) {
  if (guess > answer) {
    return "Too high"
  }
  else if (guess < answer) {
    return "Too low"
  }
  else {
    return "Correct"
  }
}

//takes user input as a guess and checks its an integer 1-1000
function makeAGuess(answer) {

  let newGuess = prompt("Make a guess 1-1000: ")

  if (isNaN(newGuess) || newGuess <= 0 || newGuess > 1000 || !(Number.isInteger(parseFloat(newGuess)))) {
    return "Not a valid integer"
  }
  else {
    return differenceFromAnswer(newGuess, answer)
  }
}

//plays the game until the guess is correct
function playGame(newNum) {
  let result = "";
  while (result != "Correct") {
    result = makeAGuess(newNum)
    console.log("\n" + result + "\n\n")
  }
}

//runs the game
playGame(generateRandomNumber())

