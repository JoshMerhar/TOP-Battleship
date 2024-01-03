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
        if (checkValidity(shipPositions, axis)) {
            updatePositions(ship, shipPositions);
            allShips.push(ship);
        } else {
            return shipPositions = [];
        }
        return shipPositions;
    }

    function checkValidity(shipPositions, axis) {
        const positions = shipPositions;
        const firstSpace = positions[0];
        const lastSpace = positions[positions.length - 1];
        if (axis === 'xAxis') {
            if (firstSpace[0] !== lastSpace[0]) return false;
            return true;
        } 
        if (axis === 'yAxis') {
            if (firstSpace[1] !== lastSpace[1]) return false;
            return true;
        }
    }

    function updatePositions(ship, shipPositions) {
        for (let i = 0; i < ship.length; i++) {
            ship.positions[i] = shipPositions[i];
        }
    }

    const missedShots = [];

    function receiveAttack(boardSpace) {
        allShips.forEach(ship => {
            const positions = ship.positions;
            positions.forEach(position => {
                if (boardSpace === position) {
                    const spaceIndex = positions.indexOf(boardSpace);
                    return ship.hit(spaceIndex);
                } else {
                    return missedShots.push(boardSpace);
                }
            }); 
        });
    }

    return { boardSpaces, allShips, placeShip, missedShots, receiveAttack };
})();

module.exports = Gameboard;