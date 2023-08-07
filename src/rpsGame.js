const Player = require('./Player');
class rpsGame {


    setUp(names = [], game, winType) {
        //had to refactor the players ternary to get rid of length - now if now name exists, it gives the default
        //the refactor came about from testing - so a change was made on the grounds of a failing test even though the program worked
        this.players = [new Player(names[0]), new Player(names[1] ? names[1] : "Default Boring Name")];
        this.gameType = game;
        this.winType = winType; //this should be cleaned up/removed - was going to add best of 3 best of 5 etc
        this.gameType = game;
    }

    // pretty proud this was my first solution - can expand this to as many rules as I want since each attack style beats one other thing = key : value
    // winningCondition = {
    //     "rock": "scissors",
    //     "scissors": "paper",
    //     "paper": "rock"
    // }

    //this has been changed for lizard spock and now uses include.
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
        this.players[0].name = "CPU Player";
        const moves = ["rock", "paper", "scissors", "lizard", "spock"]
        this.players[0].currentMove = moves[Math.floor(Math.random() * (moves.length))]
        // console.log(2222, moves[Math.floor(Math.random() * (moves.length))])
    }
    // TODO: Make it to where instead of scorepage saying last move vs lastmove it says something like "paper disproves spock" as per the RPSLS rules https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock
    setPlayersLastMove() { // really basic but just some QoL functionality
        this.players[0].lastMove = this.players[0].currentMove;
        this.players[1].lastMove = this.players[1].currentMove;
    }

    score() {
        // console.log("here", this.players[0].currentMove, " | ", this.players[1].currentMove, " | ", this.players[1].name)
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

module.exports = rpsGame;   