const Ship = require('../scripts/shipHandler');

const Gameboard = (() => {
    
    function buildBoard() {
        const board = [];
        const letterA = 'A';
        let letterCode = letterA.charCodeAt(0);
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j < 11; j++) {
                const rowLetter = String.fromCharCode(letterCode + i);
                board.push(rowLetter + j);
            }
        }
        return board;
    }

    const boardSpaces = buildBoard();

    const allShips = [];
    
    const allShipPositions = [];

    function placeShip(shipName, length, boardSpace, axis) {
        const rootIndex = boardSpaces.indexOf(boardSpace);
        const ship = Ship(shipName, length);
        let shipPositions = [];
        
        if (axis === 'yAxis') {
            let indexOffset = 0;
            for (let i = 0; i < ship.length; i++) {
                let spaceIndex = rootIndex + indexOffset;
                shipPositions.push(boardSpaces[spaceIndex]);
                indexOffset += 10;
            }
        } else {
            shipPositions = boardSpaces.slice(rootIndex, rootIndex + ship.length);
        }
        allShipPositions.push(...shipPositions);
        allShips.push({'ship' : ship, 'positions' : shipPositions});
        return shipPositions;
    }

    return { boardSpaces, placeShip };
})();

module.exports = Gameboard;