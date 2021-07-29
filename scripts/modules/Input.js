let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", e => {
    switch (e.code) {
        case "ArrowUp":
            if (lastInputDirection.y !== 1) {
                inputDirection = { x: 0, y: -1 }
            }
            break;
        case "ArrowDown":
            if (lastInputDirection.y !== -1) {
                inputDirection = { x: 0, y: 1 }
            }
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !== 1) {
                inputDirection = { x: -1, y: 0 }
            }
            break;
        case "ArrowRight":
            if (lastInputDirection.x !== -1) {
                inputDirection = { x: 1, y: 0 }
            }
            break;
    }
});

class Input {    
    static getInputDirection() {
        lastInputDirection = inputDirection;
        return inputDirection;
    }
}