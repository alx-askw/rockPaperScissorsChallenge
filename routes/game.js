const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const rpsGameAI = require('../src/rpsGameAI');
const rpsGameTwoPlayer = require('../src/rpsGameTwoPlayer');

router.post('/', (req, res) => {
    const gameObj = req.body.gameType === 'vsAI' ? new rpsGameAI() : new rpsGameTwoPlayer();
    console.log(req.body)
    // req.body.gameType === 'vsAI' ? gameObj.setUp([req.body.player1Name, new AIPlayer], req.body.gameType, req.body.bestOf) : gameObj.setUp([req.body.player1Name, req.body.player2Name], req.body.gameType, req.body.bestOf);
    res.redirect('/game')
})

router.get('/', (req, res) => {
    console.log("here")
    res.render('game')
})


module.exports = router;