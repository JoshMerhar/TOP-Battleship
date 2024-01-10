const domHandler = (() => {

    function renderBoard(boardSpaces, boardName) {
        let offset = 0;
        const boardIdChar = boardName[0];
        const board = document.getElementById(`${boardName}`);
        for (let i = 0; i < 10; i++) {
            const row = board.appendChild(document.createElement('div'));
            row.classList.add('board-row');
            for (let j = 0; j < 10; j++) {
                const space = document.createElement('div');
                space.classList.add('board-space');
                space.id = boardIdChar + boardSpaces[j + offset];
                if (boardName === 'computer-board') {
                    space.classList.add('computer-board');
                    space.addEventListener('click', registerAttack);
                }
                row.appendChild(space);
            }
            offset += 10;
            board.appendChild(row);
        }
    }

    function renderDummyBoards() {
        const playerBoard = document.getElementById('player-board');
        const computerBoard = document.getElementById('computer-board');
        for (let i = 0; i < 10; i++) {
            const playerRow = playerBoard.appendChild(document.createElement('div'));
            const computerRow = computerBoard.appendChild(document.createElement('div'));
            playerRow.classList.add('board-row');
            computerRow.classList.add('board-row');
            for (let j = 0; j < 10; j++) {
                const playerSpace = document.createElement('div');
                const computerSpace = document.createElement('div');
                playerSpace.classList.add('board-space');
                computerSpace.classList.add('board-space');
                playerRow.appendChild(playerSpace);
                computerRow.appendChild(computerSpace);
            }
            playerBoard.appendChild(playerRow);
            computerBoard.appendChild(computerRow);
        }
    }

    function renderPlayerShips(ships) {
        ships.forEach(ship => {
            const positions = ship.positions;
            for (let i = 0; i < positions.length; i++) {
                const space = document.getElementById('p' + positions[i]);
                space.classList.add('ship-space');
            }
        })
    }

    function registerAttack(event) {
        let targetSpace = event.target.id;
        targetSpace = targetSpace.slice(1);
        
        const Game = require('../scripts/game');
        Game.playGame(targetSpace);
    }

    function updateBoard(gameboard, letter) {
        const misses = gameboard.missedShots;
        const hits = gameboard.hitShots;

        misses.forEach(miss => {
            const missedSpace = document.getElementById(letter + miss);
            missedSpace.classList.add('missed-space');
            missedSpace.removeEventListener('click', registerAttack);
        });

        hits.forEach(hit => {
            const hitSpace = document.getElementById(letter + hit);
            hitSpace.classList.add('hit-space');
            hitSpace.removeEventListener('click', registerAttack);
        });
    }

    function clearBoards() {
        const playerBoard = document.getElementById('player-board');
        const computerBoard = document.getElementById('computer-board');
        const message = document.getElementById('action-message');
        playerBoard.innerHTML = '';
        computerBoard.innerHTML = '';
        message.textContent = 'Sink all enemy ships to win';
    }
    
    function displayMiss(shot) {
        const message = document.getElementById('action-message');
        message.textContent = `${shot}... Miss.`
    }

    function displayHit(shot) {
        const message = document.getElementById('action-message');
        message.textContent = `${shot}... It's a hit!`;
    }

    function displaySunkShip(shipName) {
        const message = document.getElementById('action-message');
        message.textContent = `The ${shipName} has been obliterated!`;
    }
    
    function displayWinner(winner) {
        const message = document.getElementById('action-message');
        message.textContent = winner;
    }

    // Disables enemy board so player can't spam fire shots
    function coverBoard() {
        const container = document.getElementById('container');
        const cover = document.createElement('div');
        cover.classList.add('board-cover');
        cover.id = 'board-cover';
        container.appendChild(cover);
    }

    // Enables enemy board during player's turn
    function revealBoard() {
        const cover = document.getElementById('board-cover');
        cover.remove();
    }

    return { renderBoard, renderDummyBoards, renderPlayerShips, updateBoard, clearBoards, displayMiss, displayHit, displaySunkShip, displayWinner, coverBoard, revealBoard };
})();

module.exports = domHandler;