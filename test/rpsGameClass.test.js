const rpsGame = require('../src/rpsGame');
const Player = require('../src/Player');
const chai = require('chai');

describe('Testing the functionality of the rpsGame class', () => {

    //this is how the html forms sends its data
    //{ player1Name: 'a', player2Name: 'b', gameType: 'localTwoPlayer' }

    //some of these tests feel like their missing the act :(

    let rpsGameObj;
    beforeEach(() => {
        rpsGameObj = new rpsGame();
    });

    afterEach(() => {
        rpsGameObj = undefined;
    })

    it('rpsGame\'s players should be a instance of the player class ', () => {
        rpsGameObj.setUp({ player1Name: 'alex', gameType: 'localTwoPlayer' });
        const playertest = rpsGameObj.players[0];

        chai.expect(playertest).to.be.instanceOf(Player);
    })

    it('players array should be of length 2 ', () => {
        rpsGameObj.setUp({ player1Name: 'digital', player2Name: 'futures', gameType: 'localTwoPlayer' });
        const playersLen = rpsGameObj.players.length;

        chai.expect(playersLen).equal(2);
    })

    it('player 2 name should be default if not player 2 name passed', () => {
        rpsGameObj.setUp({ player1Name: 'alex', gameType: 'localTwoPlayer' });

        const player2name = rpsGameObj.players[1].name;

        chai.expect(player2name).equal("Default Boring Name");
    });

    it('the current player should return correctly', () => {
        rpsGameObj.setUp(['digital', 'futures']);
        const result = rpsGameObj.currentPlayer();

        chai.expect(result.name).equal("digital")
    })

    it('switch players should work as intended ', () => {
        rpsGameObj.setUp(['digital', 'futures']);
        rpsGameObj.switchPlayers();

        const result = rpsGameObj.currentPlayer();

        chai.expect(result.name).equal("futures");
    })



})
