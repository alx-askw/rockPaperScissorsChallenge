class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.currentMove = undefined;
    }

    roundWin() {
        this.score += 1;
    }
}

module.exports = Player;