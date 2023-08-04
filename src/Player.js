class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.currentMove = undefined;
        this.lastMove = undefined; // just here so score screen can show what each player chose
    }

    roundWin() {
        this.score += 1;
    }
}

module.exports = Player;