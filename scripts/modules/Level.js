class Level {

    static points = 0;
    static levels = { 
        easy: {
            expandSize: 1,
            class: "food-easy",
            points: 50,
            speed: 0.5
        },
        medium: {
            expandSize: 2,
            class: "food-medium",
            points: 100,
            speed: 1.25
        },
        hard: {
            expandSize: 3,
            class: "food-hard",
            points: 250,
            speed: 2
        },
        veryHard: {
            expandSize: 1,
            class: "food-very-hard",
            points: 500,
            speed: 3
        },
    };

    static getExpandSize() {
        return this.currentLevel().expandSize;
    }

    static getFoodClass() {
        return this.currentLevel().class;
    }

    static getSpeed() {
        return this.currentLevel().speed;
    }

    static currentLevel() {
        let lvl;
        if (this.points < 300) {
            lvl = this.levels.easy;
        } else if (this.points < 1000) {
            lvl = this.levels.medium;
        } else if (this.points < 2500) {
            lvl = this.levels.hard;
        } else if (this.points < 5000) {
            lvl = this.levels.veryHard;
        }
        return lvl;
    }

    static increasePoints() {
        this.points += this.currentLevel().points;
    }
}