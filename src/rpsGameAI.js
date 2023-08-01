const Player = require('./Player');
const AIPlayer = require('./AIPlayer');

class rpsGameAI {


    setUp(names, game, winType) {
        this.players = [new Player(names), new AIPlayer];
        this.gameType = game;
        this.winType = winType;
    }

    currentPlayer() {
        return this.players[0]
    }

    testPrint() {
        console.log('========================')
        console.log(this.players)
        console.log(this.gameType)
        console.log(this.winType)
        console.log('========================')
    }
}

module.exports = rpsGameAI;   