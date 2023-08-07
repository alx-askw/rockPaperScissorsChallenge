const express = require('express');
const router = express.Router();

//this one is for 2 player
router.post('/', (req, res) => {
    const game = req.app.locals.gameObj;
    game.currentPlayer().currentMove = req.body.attackChoice;
    console.log("||| ", game.players[0], " ||||")
    game.switchPlayers();
    game.score()
    game.setPlayersLastMove()
    game.clear()
    res.render('scoreScreen', {
        name: game.players,
    });
})


// this is for ai game
router.get('/', (req, res) => {
    const game = req.app.locals.gameObj;

    game.currentPlayer();
    game.switchPlayers();
    game.score()
    game.setPlayersLastMove()
    game.clear()
    res.render('scoreScreen', {
        name: game.players,
    });
})


module.exports = router;    