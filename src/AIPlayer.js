class AIPlayer {
    constructor() {
        this.name = 'AI Player';
        this.score = 0;
    }

    roundWin() {
        this.score += 1;
    }
}

module.exports = AIPlayer;