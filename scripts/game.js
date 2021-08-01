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
        (async () => { 
            const confirm = await personalizedConfirm("Game Over :c wanna play again?"); 
            if (confirm) {
                location.reload();
            }
            return;
        })();
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

async function personalizedConfirm(msg) {
    try {
        let result = await Swal.fire({
            title: `<h3 class="white">${msg}</h3>`,
            showCancelButton: true,
            background: '#0f0f0f',
            cancelButtonColor: '#222222',
            cancelButtonText: '<h3 class="green">No</h3>',
            confirmButtonColor: '#2fe93e',
            confirmButtonText: '<h3 class="gray">Yes</h3>',
        }).then(result => {
            return result.isConfirmed;
        })
        return result;
    } catch(e) {
        console.log(e);
    }
}