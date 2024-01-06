const Gameboard = require('./gameboard');

const domHandler = (() => {
    const computerBoard = document.getElementById('computer-board');

    function renderPlayerBoard() {
        const playerBoard = document.getElementById('player-board');
        for (let i = 0; i < 10; i++) {
            const row = playerBoard.appendChild(document.createElement('div'));
            for (let j = 0; j < 10; j++) {
                const space = document.createElement('div');
                space.classList.add('board-space');
                row.appendChild(space);
            }
            playerBoard.appendChild(row);
        }
    }

    return { computerBoard, renderPlayerBoard };
})();

module.exports = domHandler;