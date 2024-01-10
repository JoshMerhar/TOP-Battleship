import './styles.css';
const Game = require('./scripts/game');
const domHandler = require('./scripts/domHandler');

const newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('click', Game.newGame);

domHandler.renderDummyBoards();