class Snake {

    static snakeBody = [
        { x: 18, y: 18 },
    ];
    static speed = Level.getSpeed();
    static newSegments = 0;
    
    static update() {
        const inputDirection = Input.getInputDirection();
        this.addSegment();
        for (let i = this.snakeBody.length - 2; i >= 0; i--) {
            this.snakeBody[i + 1] = { ...this.snakeBody[i] };
        }
        this.speed = Level.getSpeed();
        this.snakeBody[0].x += inputDirection.x;
        this.snakeBody[0].y += inputDirection.y;
        document.querySelector("#points").innerText = Level.points;
    }
    
    static draw(gameBoard) {
        this.snakeBody.forEach(bodyPart => {
            const snakeElement = document.createElement("div");
            snakeElement.classList.add("snake", "square");
            snakeElement.style.gridColumnStart = bodyPart.x;
            snakeElement.style.gridRowStart = bodyPart.y;
            gameBoard.appendChild(snakeElement);
        });
    }
    
    static expandSnake(size) {
        Level.increasePoints();
        this.newSegments = size;
    }
    
    static onSnake(position, ignoreHead = false) {
        return this.snakeBody.some((segment, index) => {
            if (ignoreHead && index === 0) 
                return false;
            return this.equalPositions(segment, position);
        });
    }
    
    static getSnakeHead() {
        return this.snakeBody[0];
    }
    
    static snakeIntersection() {
        return this.onSnake(this.snakeBody[0], { ignoreHead : true });
    }
    
    static addSegment() {
        for (let i = 0; i < this.newSegments; i++) {
            this.snakeBody.push({ ...this.snakeBody[this.snakeBody.length - 1] });
        }
        this.newSegments = 0;
    }
    
    static equalPositions(pos1, pos2) {
        return (pos1.x === pos2.x && pos1.y === pos2.y);
    }
}
