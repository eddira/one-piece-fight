const players = [
  { name: "MONKEY-D.LUFFY", img: "1-MONKEY-D.LUFFY.png", strength: 9 },
  { name: "BLACK-BEARD", img: "2-BLACK-BEARD.png", strength: 8 },
  { name: "KAIDO", img: "3-KAIDO.png", strength: 7 },
  { name: "BIG-MOM", img: "4-BIG-MOM.png", strength: 6 },
  { name: "SHANKS", img: "5-SHANKS.jpg", strength: 5 },
  { name: "SENGOKU", img: "6-SENGOKU.jpg", strength: 4 },
  { name: "SAKAZUKI-AKAINU", img: "7-SAKAZUKI-AKAINU.jpg", strength: 3 },
  { name: "MONKEY-D.DRAGON", img: "8-MONKEY-D.DRAGON.png", strength: 2 },
  { name: "SILVERS-RAYLEIGH", img: "9-SILVERS-RAYLEIGH.jpg", strength: 1 },
];

const choices = document.querySelectorAll("#pictures > img");
const yourPlayerDisplay = document.querySelector("#your-player-display");
const figthButton = document.querySelector(".fight");
const computerDisplay = document.querySelector("#your-computer-display");
let resultDisplay = document.querySelector(".result");
let boxDialog = document.querySelector("#box-dialog");
let btnReset = document.querySelector("#reset");

let yourChoice = "";
let computerChoice = "";
let yourCounter = document.querySelector(".your-counter");
let computerCounter = document.querySelector(".computer-counter");
let yourScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    yourChoice = choice.alt;
    // console.log(yourChoice);
    yourPlayerDisplay.src = choice.src;
  });
});

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * players.length);
  const randomCharacter = choices[randomNumber];
  computerChoice = randomCharacter.alt;
  computerDisplay.src = randomCharacter.src;
};

const fight = () => {
  let result = "YOU LOOSE";
  if (
    yourChoice === "MONKEY-D.LUFFY" &&
    (computerChoice === "BLACK-BEARD" || computerChoice === "KAIDO")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "BLACK-BEARD" &&
    (computerChoice === "KAIDO" || computerChoice === "BIG-MOM")
  ) {
    result = "YOU WIN";
  }
  if (
    yourChoice === "KAIDO" &&
    (computerChoice === "BIG-MOM" || computerChoice === "SHANKS")
  ) {
    result = "YOU WIN";
  }

  if (
    yourChoice === "BIG-MOM" &&
    (computerChoice === "SHANKS" || computerChoice === "SENGOKU")
  ) {
    result = "YOU WIN";
  }

  if (
    yourChoice === "SHANKS" &&
    (computerChoice === "SENGOKU" || computerChoice === "SAKAZUKI-AKAINU")
  ) {
    return "YOU WIN";
  }

  if (
    yourChoice === "SENGOKU" &&
    (computerChoice === "SAKAZUKI-AKAINU" ||
      computerChoice === "MONKEY-D.DRAGON")
  ) {
    result = "YOU WIN";
  }

  if (
    yourChoice === "SAKAZUKI-AKAINU" &&
    (computerChoice === "MONKEY-D.DRAGON" ||
      computerChoice === "SILVERS-RAYLEIGH")
  ) {
    result = "YOU WIN";
  }

  if (
    yourChoice === "MONKEY-D.DRAGON" &&
    (computerChoice === "SILVERS-RAYLEIGH" ||
      computerChoice === "MONKEY-D.LUFFY")
  ) {
    result = "YOU WIN";
  }
  if (yourChoice === computerChoice) {
    result = "IT'S A TIE";
  }

  return result;
};

const play = () => {
  getComputerChoice();
  fight();
  displayScore(fight());
  // ajouter un timeout de 500ms avant de check if finished
  displayResult(fight());
  //timeoutGame()
  checkIfFinished();
};

figthButton.addEventListener("click", play);

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
    //   alert("YOU WIN THIS GAME")
    //   boxDialog.style.visibility = boxDialog.style.visibility == "visible" ? "hidden" : "visible";
    //   document.getElementById('winner').textContent = "YOU !"
    boxDialog.showModal();
    document.getElementById("winner").textContent = "YOU !";
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

  boxDialog.close();
});

//function timeoutGame() {
// setTimeout(() => {
// checkIfFinished()
//  }, 500);
//}

//function openDialog() {
// boxDialog.style.visibility = boxDialog.style.visibility == "visible" ? "hidden" : "visible";
//}
