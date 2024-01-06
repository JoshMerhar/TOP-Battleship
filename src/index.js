import './styles.css';
const Game = require('./scripts/game');
const domHandler = require('./scripts/domHandler');

domHandler.renderPlayerBoard(domHandler.playerBoard);
Game.playGame();