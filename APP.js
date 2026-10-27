let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX,playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disbaleBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetgame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disbaleBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("WINNER", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
