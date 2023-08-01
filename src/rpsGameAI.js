const Player = require('./Player');

class rpsGameAI {
    // setUp(names, gameType, player)
    setUp(names, game, winType) {
        this.players = names.map(name => new Player(name));
        this.gameType = game;
        this.winType = winType;
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