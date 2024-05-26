let Flag = 1;

const PlayerTurn = [document.getElementById("turn__Player1"), document.getElementById("turn__Player2")];
const Buttons = Array.from({ length: 9 }, (_, i) => document.getElementById("btn" + (i + 1)));
const winX = document.getElementById("Player1__counter");
const winO = document.getElementById("Player2__counter");

function EditPlayerName(i) {
    const x = document.getElementById("PlayerName__" + i);
    const y = document.getElementById("Edit__PlayerName" + i);
    x.disabled = !x.disabled;
    ChangeButton(x, y);
}

function ChangeButton(x, y) {
    y.innerHTML = x.disabled ? "edit" : "save";
    x.style.background = x.disabled ? "none" : "rgba(256,256,256,0.2)";
}

function PlayerTurnSelector() {
    Flag = 1 - Flag; // Toggle between 1 and 0
    PlayerTurn[0].style.border = Flag ? "#FAC63C solid 1px" : "none";
    PlayerTurn[1].style.border = Flag ? "none" : "#FAC63C solid 1px";
}

function BtnXorO(i) {
    Buttons[i].innerHTML = Flag ? "X" : "O";
    Buttons[i].disabled = true;
    PlayerTurnSelector();
    CheckWinner();
}

function CheckWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (Buttons[a].innerHTML && Buttons[a].innerHTML === Buttons[b].innerHTML && Buttons[a].innerHTML === Buttons[c].innerHTML) {
            handleWin(combination, Buttons[a].innerHTML);
            return;
        }
    }
}

function handleWin(indices, player) {
    highlightWinningButtons(indices);
    disableAllButtons();
    player === 'X' ? winX.stepUp() : winO.stepUp();
}

function highlightWinningButtons(indices) {
    indices.forEach(index => Buttons[index].style.background = "#FAC63C");
}

function disableAllButtons() {
    Buttons.forEach(button => button.disabled = true);
}

function Continue() {
    Buttons.forEach((button, i) => {
        button.innerHTML = "";
        button.disabled = false;
        button.style.background = "#9F9976";
    });
    // Resets the game 
    Flag = 1;
    PlayerTurn[0].style.border = "#FAC63C solid 1px";
    PlayerTurn[1].style.border = "none";
}
