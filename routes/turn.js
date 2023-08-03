const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.gameObj
    game.currentPlayer().currentMove = req.body.attackChoice;
    game.switchPlayers();
    res.redirect('/player2')
})

router.get('/', (req, res) => {
    res.render('fallbackPage');
})


module.exports = router;    