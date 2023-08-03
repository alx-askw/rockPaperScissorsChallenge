const express = require('express');
const router = express.Router();

//this one is for 2 player
router.post('/', (req, res) => {
    const game = req.app.locals.gameObj;
    game.currentPlayer().currentMove = req.body.attackChoice;
    game.switchPlayers();
    game.score()
    game.clear()
    res.render('scoreScreen', {
        name: game.players,
    });
})


// this is for ai
router.get('/', (req, res) => {
    const game = req.app.locals.gameObj;

    game.currentPlayer();
    game.switchPlayers();
    game.score()
    game.clear()
    res.render('scoreScreen', {
        name: game.players,
    });
})


module.exports = router;    