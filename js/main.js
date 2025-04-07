let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
console.log(reset);
cells.forEach((item) => item.addEventListener("click", addChoice));
reset.addEventListener("click", resetGame);
let currentChoice = "X";
function addChoice() {
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
}
