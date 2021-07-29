class Food {

    static foodPosition = Grid.randomGridPosition();
    
    static update() {
        if (Snake.onSnake(this.foodPosition)) {
            Snake.expandSnake(Level.getExpandSize());
            this.foodPosition = Grid.randomGridPosition();
        }
    }
    
    static draw(gameBoard) {
        const foodElement = document.createElement("div");
        foodElement.classList.add(Level.getFoodClass(), "square");
        foodElement.style.gridColumnStart = this.foodPosition.x;
        foodElement.style.gridRowStart = this.foodPosition.y;
        gameBoard.appendChild(foodElement);
    }
    
    static getRandomPosition() {
        let newFoodPosition;
        while (newFoodPosition === null || Snake.onSnake(newFoodPosition)) {
            newFoodPosition = Grid.randomGridPosition();
        }
        return newFoodPosition;
    }
}
