const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const rpsGame = require('../src/rpsGame');

router.post('/', (req, res) => {
    //this code stinks - two ternaries doing the same thing (maybe add constructors instead?) 
    console.log(req.body)
    const gameObj = new rpsGame();
    req.body.gameType === 'vsAI' ? gameObj.setUp(req.body.player1Name, req.body.gameType, req.body.bestOf) : gameObj.setUp([req.body.player1Name, req.body.player2Name], req.body.gameType, req.body.bestOf);
    req.app.locals.gameObj = gameObj;
    //remember to do this last!!!
    res.redirect('/player1');
})

router.get('/', (req, res) => {
    const player = req.app.locals.gameObj.currentPlayer();
    res.render('game', {
        name: player.name,
        score: player.score
    });
})


module.exports = router;