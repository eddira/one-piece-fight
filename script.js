const choices = document.querySelectorAll("#pictures > img");
const yourPlayerDisplay = document.querySelector("#your-player-display");
const figthButton = document.querySelector("#start-fight");
const computerDisplay = document.querySelector("#your-computer-display");
const resultDisplay = document.querySelector("#result");
const boxDialog = document.querySelector("#box-dialog");
const btnReset = document.getElementById("reset");
const yourCounter = document.querySelector(".your-counter");
const computerCounter = document.querySelector(".computer-counter");

let yourChoice = "";
let computerChoice = "";
let yourScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    yourChoice = choice.alt;
    yourPlayerDisplay.src = choice.src;
  });
});

const fight = () => {
  let result = "YOU LOOSE";
  if (
    yourChoice === "MONKEY-D.LUFFY" &&
    (computerChoice === "BLACK-BEARD" ||
      computerChoice === "KAIDO" ||
      computerChoice === "BIG-MOM")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "BLACK-BEARD" &&
    (computerChoice === "KAIDO" ||
      computerChoice === "BIG-MOM" ||
      computerChoice === "SHANKS")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "KAIDO" &&
    (computerChoice === "BIG-MOM" ||
      computerChoice === "SHANKS" ||
      computerChoice === "SENGOKU")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "BIG-MOM" &&
    (computerChoice === "SHANKS" ||
      computerChoice === "SENGOKU" ||
      computerChoice === "SAKAZUKI-AKAINU")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "SHANKS" &&
    (computerChoice === "SENGOKU" ||
      computerChoice === "SAKAZUKI-AKAINU" ||
      computerChoice === "MONKEY-D.DRAGON")
  ) {
    return "YOU WIN";
  }
  if (
    yourChoice === "SENGOKU" &&
    (computerChoice === "SAKAZUKI-AKAINU" ||
      computerChoice === "MONKEY-D.DRAGON" ||
      computerChoice === "SILVERS-RAYLEIGH")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "SAKAZUKI-AKAINU" &&
    (computerChoice === "MONKEY-D.DRAGON" ||
      computerChoice === "SILVERS-RAYLEIGH" ||
      computerChoice === "MONKEY-D.LUFFY")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "MONKEY-D.DRAGON" &&
    (computerChoice === "SILVERS-RAYLEIGH" ||
      computerChoice === "MONKEY-D.LUFFY" ||
      computerChoice === "BLACK-BEARD")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "SILVERS-RAYLEIGH" &&
    (computerChoice === "MONKEY-D.LUFFY" ||
      computerChoice === "BLACK-BEARD" ||
      computerChoice === "KAIDO")
  ) {
    result = "YOU WIN";
  }
  if (yourChoice === computerChoice) {
    result = "IT'S A TIE";
  }
  return result;
};

const play = () => {
  fight();
  getComputerChoice();
  displayResult(fight());
  hideResult();
  displayScore(fight());
  checkIfFinished();
};

figthButton.addEventListener("click", play);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 9);
  const randomCharacter = choices[randomNumber];
  computerChoice = randomCharacter.alt;
  computerDisplay.src = randomCharacter.src;
}

function displayScore(result) {
  if (result === "YOU WIN") {
    yourScore += 1;
    yourCounter.textContent = yourScore;
  }
  if (result === "YOU LOOSE") {
    computerScore += 1;
    computerCounter.textContent = computerScore;
  }
}

function displayResult(result) {
  if (result === "YOU WIN") {
    resultDisplay.textContent = result;
  }
  if (result === "YOU LOOSE") {
    resultDisplay.textContent = result;
  }
  if (result === "IT'S A TIE") {
    resultDisplay.textContent = result;
  }
}

function checkIfFinished() {
  if (yourScore === 5) {
    boxDialog.showModal();
    document.getElementById("winner").textContent = "YOU !";
    //   alert("YOU WIN THIS GAME")
    //   boxDialog.style.visibility = boxDialog.style.visibility == "visible" ? "hidden" : "visible";
    //   document.getElementById('winner').textContent = "YOU !"
  } else if (computerScore === 5) {
    //   alert("YOU LOOSE");
    //  boxDialog.style.visibility = boxDialog.style.visibility == "visible" ? "hidden" : "visible";
    // document.getElementById('winner').textContent = "THE COMPUTER !"
    boxDialog.showModal();
    document.getElementById("winner").textContent = "THE COMPUTER !";
  }
}

btnReset.addEventListener("click", (event) => {
  yourScore = 0;
  computerScore = 0;
  yourCounter.textContent = 0;
  computerCounter.textContent = 0;
  yourPlayerDisplay.src = "";
  computerDisplay.src = "";
  boxDialog.close();
});

function hideResult() {
  setTimeout(() => {
    resultDisplay.textContent = "?";
  }, 500);
}

//function timeoutGame() {
// setTimeout(() => {
// checkIfFinished()
//  }, 500);
//}
