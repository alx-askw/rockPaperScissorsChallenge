const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');

// TODO: Add turn route
// TODO: consider added ai turn vs 2player turn, one automatically does its turn whilst the other is just another player turn
// TODO: Alternatively consider refactoring and having the program just spit out a random attack if ai, No computerplayer class needed
app.use('/', indexRouter);
app.use('/game', gameRouter);

app.listen(PORT, () => {
    console.log(`server online: local`)
})