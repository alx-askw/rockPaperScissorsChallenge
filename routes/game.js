const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const gameObj = new rpsGame();
    console.log(req.body)

    res.redirect('/game')
})

router.get('/', (req, res) => {
    console.log("here")
    res.render('game')
})


module.exports = router;