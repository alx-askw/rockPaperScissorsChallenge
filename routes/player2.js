const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('fallbackPage');
})

router.get('/', (req, res) => {
    const player = req.app.locals.gameObj.currentPlayer();
    res.render('player2', {
        name: player.name,
        score: player.score
    });
})


module.exports = router;