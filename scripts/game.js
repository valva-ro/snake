let lastRenderTime = 0;
let gameOver = false;
let gameBoard;
let highscoreContainer;
let highscore = localStorage.getItem("highscore") !== null ? localStorage.getItem("highscore") : 0;

window.onload = () => {
    gameBoard = document.querySelector("#gameBoard");
    highscoreContainer = document.querySelector("#highscore");
    highscoreContainer.innerText = highscore;
    window.requestAnimationFrame(play);
}

function play(currentTime) {

    const secsSinceLastRender = (currentTime - lastRenderTime) / 100;

    if (gameOver) {
        // TODO: replace this confirm with a sweetalert
        if (confirm("Game Over :c wanna play again?")) {
            location.reload();
        }
        return;
    }

    window.requestAnimationFrame(play);
    if (secsSinceLastRender >= 1 / Snake.speed) {
        lastRenderTime = currentTime;
        update();
        draw();
    }
}

function update() {
    Snake.update();
    Food.update();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    Snake.draw(gameBoard);
    Food.draw(gameBoard);
}

function checkDeath() {
    gameOver = Grid.outisdeGrid(Snake.getSnakeHead()) || Snake.snakeIntersection();
}

function updateHighscore() {
    if (highscore < Level.points) {
        localStorage.setItem("highscore", Level.points);
        highscoreContainer.innerText = Level.points;
    }
}