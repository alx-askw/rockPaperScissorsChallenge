const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.gameObj;
    game.currentPlayer().currentMove = req.body.attackChoice;
    game.switchPlayers();
    game.score()
    game.clear()
    res.redirect('scoreScreen')
})

router.get('/', (req, res) => {
    const game = req.app.locals.gameObj;
    res.render('scoreScreen', {
        name: game.players,
    });
})


module.exports = router;    