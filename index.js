const prompt = require('prompt-sync')();

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  //console.log("Answer: " + randomNumber)
  return randomNumber;
}

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

function makeAGuess(answer) {

  let newGuess = prompt("Make a guess 1-1000: ")

  if (isNaN(newGuess) || newGuess <= 0 || newGuess > 1000 || !(Number.isInteger(parseFloat(newGuess)))) {
    return "Not a valid integer"
  }
  else {
    return differenceFromAnswer(newGuess, answer)
  }

}

function playGame(newNum) {
  let result = "";
  while (result != "Correct") {
    result = makeAGuess(newNum)
    console.log("\n" + result + "\n\n")
  }
}
playGame(generateRandomNumber())

