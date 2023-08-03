const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.gameObj
    game.currentPlayer().currentMove = req.body.attackChoice;
    game.switchPlayers();
    game.gameType === 'vsAI' ? (game.aiPlay(), res.redirect('/scoreScreen'), console.log(game.players[0])) : res.redirect('/player2');
})

router.get('/', (req, res) => {
    res.render('fallbackPage');
})


module.exports = router;        