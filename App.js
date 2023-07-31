const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);

app.listen(PORT, () => {
    console.log(`server online: local`)
})