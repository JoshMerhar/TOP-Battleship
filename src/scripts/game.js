const Gameboard = require('../scripts/gameboard');
const Player = require('../scripts/player');
const domHandler = require('../scripts/domHandler');

const Game = (() => {

    const player = Player();
    const computer = Player();
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();

    playerBoard.placeShip('carrier', 5, 'G5', 'xAxis');
    playerBoard.placeShip('battleship', 4, 'B4', 'yAxis');
    playerBoard.placeShip('cruiser', 3, 'D7', 'xAxis');
    playerBoard.placeShip('submarine', 3, 'H2', 'yAxis');
    playerBoard.placeShip('destroyer', 2, 'A1', 'xAxis');

    computerBoard.placeShip('carrier', 5, 'B3', 'xAxis');
    computerBoard.placeShip('battleship', 4, 'C2', 'yAxis');
    computerBoard.placeShip('cruiser', 3, 'C7', 'xAxis');
    computerBoard.placeShip('submarine', 3, 'H3', 'yAxis');
    computerBoard.placeShip('destroyer', 2, 'A1', 'xAxis');

    domHandler.renderBoard(playerBoard.boardSpaces, 'player-board');
    domHandler.renderBoard(computerBoard.boardSpaces, 'computer-board');

    domHandler.renderPlayerShips(playerBoard.allShips);

    console.log(playerBoard.allShips);
    console.log(computerBoard.allShips);

    let gameOver = false;
    let turnNumber = 1;

    function playGame(attack) {
        if (gameOver === false) {
            if (turnNumber % 2 !== 0 && attack !== '') {
                const boardSpace = attack;
                player.pickSpace(boardSpace, computerBoard);
                domHandler.updateBoard(computerBoard, 'c');
                console.log(computerBoard.missedShots);
            } else {
                computer.autoPickSpace(playerBoard);
                domHandler.updateBoard(playerBoard, 'p');
                console.log(playerBoard.missedShots);
            }
            if (computerBoard.allShipsSunk() || playerBoard.allShipsSunk()) gameOver = true;
        }
        if (gameOver) {
            return checkWinner(playerBoard, computerBoard);
        }
        turnNumber++;
        if (turnNumber % 2 === 0 && !gameOver) playGame('');
        return;
    }

    function checkWinner(playerBoard, computerBoard) {
        let winner = '';
        if (computerBoard.allShipsSunk()) winner = 'You win!';
        if (playerBoard.allShipsSunk()) winner = 'The AI overlords win...';
        console.log(winner);
        return winner;
    }

    return { playGame };
})();

module.exports = Game;