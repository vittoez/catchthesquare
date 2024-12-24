
let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");

    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;

    square.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        gameArea.removeChild(square);
        createSquare();
    });

    gameArea.appendChild(square);
}

createSquare();
