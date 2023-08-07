const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');
const player1Router = require('./routes/player1.js');
const player2Router = require('./routes/player2.js');
const scoreScreenRouter = require('./routes/scoreScreen.js');

// TODO: Add turn route
// TODO: consider added ai turn vs 2player turn, one automatically does its turn whilst the other is just another player turn
// TODO: Alternatively consider refactoring and having the program just spit out a random attack if ai, No computerplayer class needed
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/player1', player1Router);
app.use('/player2', player2Router);
app.use('/scoreScreen', scoreScreenRouter);


const APP = app.listen(PORT, () => {
    console.log(`server online: localhost:${PORT}`)
})


module.exports = APP;