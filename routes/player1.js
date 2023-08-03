const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('player1')
})

router.get('/', (req, res) => {
    const player = req.app.locals.gameObj.currentPlayer();
    res.render('player1', {
        name: player.name,
        score: player.score
    });
})


module.exports = router;