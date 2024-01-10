const Gameboard = require('../scripts/gameboard');
const Player = require('../scripts/player');
const domHandler = require('../scripts/domHandler');

const Game = (() => {
    
    let player = '';
    let computer = '';
    let playerBoard = '';
    let computerBoard = '';

    let gameOver = false;
    let turnNumber = 1;
    
    function newGame() {
        domHandler.clearBoards();

        player = Player();
        computer = Player();
        playerBoard = Gameboard();
        computerBoard = Gameboard();

        playerBoard.autoPlaceShip('carrier', 5);
        playerBoard.autoPlaceShip('battleship', 4);
        playerBoard.autoPlaceShip('cruiser', 3);
        playerBoard.autoPlaceShip('submarine', 3);
        playerBoard.autoPlaceShip('destroyer', 2);

        computerBoard.autoPlaceShip('carrier', 5);
        computerBoard.autoPlaceShip('battleship', 4);
        computerBoard.autoPlaceShip('cruiser', 3);
        computerBoard.autoPlaceShip('submarine', 3);
        computerBoard.autoPlaceShip('destroyer', 2);

        domHandler.renderBoard(playerBoard.boardSpaces, 'player-board');
        domHandler.renderBoard(computerBoard.boardSpaces, 'computer-board');
        domHandler.renderPlayerShips(playerBoard.allShips);

        console.log(playerBoard.allShips);
        console.log(computerBoard.allShips);

        gameOver = false;
        turnNumber = 1;
    }

    function playGame(attack) {
        if (gameOver === false) {
            if (turnNumber % 2 !== 0 && attack !== '') {
                const boardSpace = attack;
                player.pickSpace(boardSpace, computerBoard);
                domHandler.updateBoard(computerBoard, 'c');
                domHandler.coverBoard();
            } else {
                computer.autoPickSpace(playerBoard);
                domHandler.updateBoard(playerBoard, 'p');
            }
            if (computerBoard.allShipsSunk() || playerBoard.allShipsSunk()) gameOver = true;
        }
        if (gameOver) return checkWinner(playerBoard, computerBoard);
        turnNumber++;
        if (turnNumber % 2 === 0 && !gameOver) {
            setTimeout(() => {playGame('')}, 1250);
            setTimeout(() => domHandler.revealBoard(), 1250);
        }
        return;
    }

    function checkWinner(playerBoard, computerBoard) {
        let winner = '';
        if (computerBoard.allShipsSunk()) winner = 'You win!';
        if (playerBoard.allShipsSunk()) winner = 'The AI overlords win...';
        domHandler.revealBoard();
        return domHandler.displayWinner(winner);
    }

    return { newGame, playGame };
})();

module.exports = Game;