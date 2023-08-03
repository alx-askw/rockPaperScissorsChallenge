class AIPlayer {
    constructor() {
        this.name = 'AI Player';
        this.score = 0;
        this.currentMove = undefined;
    }

    roundWin() {
        this.score += 1;
    }
}

module.exports = AIPlayer;