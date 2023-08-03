const Player = require('./Player');
const AIPlayer = require('./AIPlayer');

class rpsGameAI {

    gameType = 'vsAI';

    setUp(names, game, winType) {
        this.players = [new Player(names), new AIPlayer];
        this.gameType = game;
        this.winType = winType;
    }

    // pretty proud this was my first solution - can expand this to as many rules as I want since each attack style beats one other thing = key : value
    // winningCondition = {
    //     "rock": "scissors",
    //     "scissors": "paper",
    //     "paper": "rock"
    // }

    winningCondition = {
        "rock": ["scissors", "lizard"],
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "lizard": ["paper", "spock"],
        "spock": ["scissors", "rock"]
    }

    currentPlayer() {
        return this.players[0]
    }

    switchPlayers() {
        this.players.reverse();
    }

    aiPlay() {
        const moves = ["rock", "paper", "scissors", "lizard", "spock"]
        this.players[0].currentMove = moves[Math.floor(Math.random() * (moves.length))]
        console.log(2222, moves[Math.floor(Math.random() * (moves.length))])
    }

    score() {
        console.log("here", this.players[0].currentMove, " | ", this.players[1].currentMove, " | ", this.players[1].name)
        if (this.players[0].currentMove === this.players[1].currentMove) { return "Tie!" };
        if (this.winningCondition[this.players[0].currentMove].includes(this.players[1].currentMove)) { this.players[0].score += 1; return "player 1 wins" };
        this.players[1].score += 1;
        return "player 2 wins";
    }

    clear() {
        this.players.forEach(player => {
            player.currentMove = undefined;
        })
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