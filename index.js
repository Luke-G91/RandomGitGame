const prompt = require('prompt-sync')();

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  console.log("Answer: " + randomNumber)
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

  let newGuess = prompt("Make a guess: ")
  return differenceFromAnswer(newGuess, answer)

}


console.log(makeAGuess(generateRandomNumber()))

