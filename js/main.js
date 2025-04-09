let ticTacToe = {};
let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");

cells.forEach((item) => item.addEventListener("click", addChoice));
reset.addEventListener("click", resetGame);

let currentChoice = "X";
function addChoice() {
  if (this.textContent !== "") return;
  if (currentChoice === "X") {
    this.textContent = "X";
    currentChoice = "O";
  } else {
    this.textContent = "O";
    currentChoice = "X";
  }
}

function resetGame() {
  cells.forEach((item) => (item.textContent = ""));
  currentChoice = "X";
}
