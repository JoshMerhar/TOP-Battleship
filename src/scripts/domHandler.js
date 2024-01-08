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
                space.addEventListener('click', registerAttack);
                row.appendChild(space);
            }
            offset += 10;
            board.appendChild(row);
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

    return { renderBoard, renderPlayerShips, updateBoard };
})();

module.exports = domHandler;