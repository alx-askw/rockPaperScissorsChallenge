# RPS Challenge


Submission Notes:
------------------
* npm i should install dependencies
* npm run start should start server on port 3000
* npm run test will run mocha and tests
* there are 10 tests, I would have like to done more but there are time constraints but I tested both the code functionality as well as the routes using both Chai-http and Postman.
* Both extended criteria are done.
* I was originally going to add the option to either player RPS or RPS + Lizard/Spock but it seemed like a time sink, so every game is RPS + Lizard/Spock
* I also was originally going to add the option to be able to choose a number of rounds that had to be won to reach a win condition but I never got round to it, though there are still traces of it in the source code.
* I didn't do any styling as that wasn't within in the requirements (and the chitter challenge is too big to keep waiting) but there are some emojis.
* there is a mark down file for references.

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by the deadline specified in Noodle

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared and an option to play again

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them and they'll be playing on the same computer_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )
