const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const express = require('express')
const app = express()
const APP = require('../App');
const indexRouter = require('../routes/index.js');
const gameRouter = require('../routes/game.js');
const rpsGame = require('../src/rpsGame.js');

chai.use(chaiHttp);


describe('Game Routes', () => {

    const testserver = chai.request(APP).keepOpen()

    it('should render get index', async () => {
        const res = await testserver.get('/').send();

        expect(res).to.have.status(200);

    });

    it('should render get /game', async () => {
        const res = await testserver.post('/game').send();

        expect(res).to.have.status(200);

    });
    it('should post 2 names (+gametype) to /game', (done) => {

        chai
            .request(app)
            .post('/game')
            .send({
                "player1Name": "Digital",
                "player2Name": "Futures",
                "gameType": "localTwoPlayer",
                "bestOf": 3
            })
            .then((res) => {
                expect(res).to.have.status(200)
            })
        done()
    });

    it('should post 1names (+gametype) to /game', (done) => {

        chai
            .request(app)
            .post('/game')
            .send({
                "player1Name": "Digital",
                "gameType": "localTwoPlayer",
                "bestOf": 3
            })
            .then((res) => {
                expect(res).to.have.status(200)

            })
        done()

    });

    it('should post /scoreScreen with status 200 ', () => {
        chai
            .request(app)
            .post('/scoreScreen')
            .send({
                "attackType": "spock"
            })
            .then((res) => {
                expect(res).to.have.status(200)

            });
    })

});
