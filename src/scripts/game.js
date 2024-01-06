const Gameboard = require('../scripts/gameboard');
const Player = require('../scripts/player');
const domHandler = require('../scripts/domHandler');

const Game = (() => {

    function playGame() {
        const player = Player();
        const computer = Player();
        const playerBoard = Gameboard();
        const computerBoard = Gameboard();

        playerBoard.placeShip('carrier', 5, 'G3', 'xAxis');
        playerBoard.placeShip('battleship', 4, 'B2', 'yAxis');
        playerBoard.placeShip('cruiser', 3, 'C7', 'xAxis');
        playerBoard.placeShip('submarine', 3, 'H2', 'yAxis');
        playerBoard.placeShip('destroyer', 2, 'A1', 'xAxis');

        computerBoard.placeShip('carrier', 5, 'B3', 'xAxis');
        computerBoard.placeShip('battleship', 4, 'C2', 'yAxis');
        computerBoard.placeShip('cruiser', 3, 'C7', 'xAxis');
        computerBoard.placeShip('submarine', 3, 'H3', 'yAxis');
        computerBoard.placeShip('destroyer', 2, 'A1', 'xAxis');

        console.log(playerBoard.boardSpaces);
        console.log(computerBoard.boardSpaces);

        console.log(playerBoard.allShips);
        console.log(computerBoard.allShips);

        let gameOver = false;
        let turnNumber = 1;
        while (gameOver === false) {
            if (turnNumber % 2 !== 0) {
                const boardSpace = '';
                player.pickSpace(boardSpace, computerBoard);
            } else {
                computer.autoPickSpace(playerBoard);
            }
            if (computerBoard.allShipsSunk() || playerBoard.allShipsSunk()) gameOver = true;
            turnNumber++;
        }
        if (gameOver) {
            checkWinner(playerBoard, computerBoard);
        }
        console.log(playerBoard.missedShots);
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