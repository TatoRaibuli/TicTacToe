const box = document.querySelectorAll(".box");
const restart = document.getElementById('restart');

function insertX() {

    this.innerText = "X";
    this.removeEventListener('click', insertX)
    play()

}

for (let i = 0; i < box.length; i++) {

    if (box[i].innerText === "") {
        box[i].addEventListener("click", insertX);
    }
}

restart.addEventListener("click", () => {
    for (let i = 0; i < box.length; i++) {

        box[i].innerText = "";
        box[i].classList.remove("blue")
        box[i].addEventListener("click", insertX)
    }

});

function play() {
    const emptyBoxes = Array.from(box).filter(box => box.innerText === "");
    if (emptyBoxes.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    emptyBoxes[randomIndex].innerText = "O";
    emptyBoxes[randomIndex].removeEventListener('click', insertX)
    checkForWin();
    checkForLose();
}

function checkForWin() {
    const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let filled of winningLines) {
        const symbol = box[filled[0]].innerText;

        if (symbol && box[filled[1]].innerText === symbol && box[filled[2]].innerText === symbol) {
            box[filled[0]].classList.add("blue");
            box[filled[1]].classList.add("blue");
            box[filled[2]].classList.add("blue");

            setTimeout(() => {
                restart.click();
            }, 1500);
        }
    }
}

function checkForLose() {
    const losingLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let filled of losingLines) {
        const symbol = box[filled[0]].innerText;

        if (symbol && box[filled[1]].innerText === symbol && box[filled[2]].innerText === symbol) {
            box[filled[0]].classList.add("blue");
            box[filled[1]].classList.add("blue");
            box[filled[2]].classList.add("blue");

            setTimeout(() => {
                restart.click();
            }, 1500);
        }
    }
}
