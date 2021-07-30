class Grid {
    static GRID_SIZE = 26;
    static randomGridPosition() {
        return {
            x: Math.floor(Math.random() * this.GRID_SIZE + 1),
            y: Math.floor(Math.random() * this.GRID_SIZE + 1)
        };
    }
    
    static outisdeGrid(position) {
        return (
            position.x < 1 || position.x > this.GRID_SIZE ||
            position.y < 1 || position.y > this.GRID_SIZE
        );
    }
}
