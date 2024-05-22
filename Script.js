let Flag = 1;

let PlayerTurn = [];
for (let i = 1; i <= 2; i++) {
    PlayerTurn.push(document.getElementById("turn__Player" + i));
}

const Buttons = [];
for (let i = 1; i <= 9; i++) {
    Buttons.push(document.getElementById("btn" + i));
}

let winX = document.getElementById("Player1__counter");
let winO = document.getElementById("Player2__counter");

function EditPlayerName(i) {
    const x = document.getElementById("PlayerName__" + i);
    const y = document.getElementById("Edit__PlayerName" + i);
    x.disabled = !x.disabled;
    ChangeButton(x, y);
}

function ChangeButton(x, y) {
    if (y.innerHTML === "edit") {
        y.innerHTML = "save";
        x.style.background = "rgba(256,256,256,0.2)";
    }
    else {
        y.innerHTML = "edit";
        x.style.background = "none";
    }
}

function PlayerTurnSelector() {
    if (Flag == 1) {
        Flag = 0;
        PlayerTurn[0].style.border = "none";
        PlayerTurn[1].style.border = "#FAC63C solid 1px";
    }
    else {
        Flag = 1;
        PlayerTurn[0].style.border = "#FAC63C solid 1px";
        PlayerTurn[1].style.border = "none";
    }
}

function BtnXorO(i) {
    if (Flag == 1) {
        Buttons[i].innerHTML = "X";
        Buttons[i].disabled = true;
        PlayerTurnSelector();
    }
    else {
        Buttons[i].innerHTML = "O";
        Buttons[i].disabled = true;
        PlayerTurnSelector();
    }
}

function CheckWinner() {
    if (Buttons[0].innerHTML == "X" && Buttons[1].innerHTML == "X" && Buttons[2].innerHTML == "X") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[1].style.background = "#FAC63C";
        Buttons[2].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[3].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[5].innerHTML == "X") {
        Buttons[3].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[5].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[6].innerHTML == "X" && Buttons[7].innerHTML == "X" && Buttons[8].innerHTML == "X") {
        Buttons[6].style.background = "#FAC63C";
        Buttons[7].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[0].innerHTML == "X" && Buttons[3].innerHTML == "X" && Buttons[6].innerHTML == "X") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[3].style.background = "#FAC63C";
        Buttons[6].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[1].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[7].innerHTML == "X") {
        Buttons[1].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[7].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[2].innerHTML == "X" && Buttons[5].innerHTML == "X" && Buttons[8].innerHTML == "X") {
        Buttons[2].style.background = "#FAC63C";
        Buttons[5].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[0].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[8].innerHTML == "X") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[2].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[6].innerHTML == "X") {
        Buttons[2].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[6].style.background = "#FAC63C";
        DisablingButtons();
        winX.stepUp();
    }

    else if (Buttons[0].innerHTML == "O" && Buttons[1].innerHTML == "O" && Buttons[2].innerHTML == "O") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[1].style.background = "#FAC63C";
        Buttons[2].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[3].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[5].innerHTML == "O") {
        Buttons[3].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[5].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[6].innerHTML == "O" && Buttons[7].innerHTML == "O" && Buttons[8].innerHTML == "O") {
        Buttons[6].style.background = "#FAC63C";
        Buttons[7].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[0].innerHTML == "O" && Buttons[3].innerHTML == "O" && Buttons[6].innerHTML == "O") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[3].style.background = "#FAC63C";
        Buttons[6].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[1].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[7].innerHTML == "O") {
        Buttons[1].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[7].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[2].innerHTML == "O" && Buttons[5].innerHTML == "O" && Buttons[8].innerHTML == "O") {
        Buttons[2].style.background = "#FAC63C";
        Buttons[5].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[0].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[8].innerHTML == "O") {
        Buttons[0].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[8].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }

    else if (Buttons[2].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[6].innerHTML == "O") {
        Buttons[2].style.background = "#FAC63C";
        Buttons[4].style.background = "#FAC63C";
        Buttons[6].style.background = "#FAC63C";
        DisablingButtons();
        winO.stepUp();
    }
}

function DisablingButtons() {
    for (let i = 0; i < 9; i++) {
        Buttons[i].disabled = true;
        PlayerTurn.push(document.getElementById("turn__Player" + i));
    }
}

function Continue() {

    if ((Buttons[0].innerHTML == "X" && Buttons[1].innerHTML == "X" && Buttons[2].innerHTML == "X") ||
        (Buttons[3].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[5].innerHTML == "X") ||
        (Buttons[6].innerHTML == "X" && Buttons[7].innerHTML == "X" && Buttons[8].innerHTML == "X") ||
        (Buttons[0].innerHTML == "X" && Buttons[3].innerHTML == "X" && Buttons[6].innerHTML == "X") ||
        (Buttons[1].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[7].innerHTML == "X") ||
        (Buttons[2].innerHTML == "X" && Buttons[5].innerHTML == "X" && Buttons[8].innerHTML == "X") ||
        (Buttons[0].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[8].innerHTML == "X") ||
        (Buttons[2].innerHTML == "X" && Buttons[4].innerHTML == "X" && Buttons[6].innerHTML == "X")) {
        PlayerTurnSelector();
    }

    else if ((Buttons[0].innerHTML == "O" && Buttons[1].innerHTML == "O" && Buttons[2].innerHTML == "O") ||
        (Buttons[3].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[5].innerHTML == "O") ||
        (Buttons[6].innerHTML == "O" && Buttons[7].innerHTML == "O" && Buttons[8].innerHTML == "O") ||
        (Buttons[0].innerHTML == "O" && Buttons[3].innerHTML == "O" && Buttons[6].innerHTML == "O") ||
        (Buttons[1].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[7].innerHTML == "O") ||
        (Buttons[2].innerHTML == "O" && Buttons[5].innerHTML == "O" && Buttons[8].innerHTML == "O") ||
        (Buttons[0].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[8].innerHTML == "O") ||
        (Buttons[2].innerHTML == "O" && Buttons[4].innerHTML == "O" && Buttons[6].innerHTML == "O")) {
        PlayerTurnSelector();
    }

    for (let i = 0; i < 9; i++) {
        Buttons[0 + i].innerHTML = "";
        Buttons[0 + i].disabled = false;
        Buttons[0 + i].style.background = "#9F9976";
    }
}