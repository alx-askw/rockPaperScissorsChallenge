const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const rpsGameAI = require('../src/rpsGameAI');
const rpsGameTwoPlayer = require('../src/rpsGameTwoPlayer');

router.post('/', (req, res) => {
    //this code stinks - two ternaries doing the same thing (maybe add constructors instead?) 
    const gameObj = req.body.gameType === 'vsAI' ? new rpsGameAI() : new rpsGameTwoPlayer();
    req.body.gameType === 'vsAI' ? gameObj.setUp(req.body.player1Name, req.body.gameType, req.body.bestOf) : gameObj.setUp([req.body.player1Name, req.body.player2Name], req.body.gameType, req.body.bestOf);
    req.app.locals.gameObj = gameObj;
    //remember to do this last!!!
    res.redirect('/player1');
})

router.get('/', (req, res) => {
    console.log("here")
    const player = req.app.locals.gameObj.currentPlayer();
    res.render('game', {
        name: player.name,
        score: player.score
    });
})


module.exports = router;