const Ship = require('../scripts/shipHandler');
const domHandler = require('./domHandler');

const Gameboard = () => {
    
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
    const allPositions = [];

    function placeShip(shipName, length, boardSpace, axis) {
        const rootIndex = boardSpaces.indexOf(boardSpace);
        const ship = Ship(shipName, length);
        let shipPositions = [];
        
        if (axis === 'yAxis') {
            let indexOffset = 0;
            for (let i = 0; i < ship.length; i++) {
                let spaceIndex = rootIndex + indexOffset;
                if (spaceIndex > 99) break;
                shipPositions.push(boardSpaces[spaceIndex]);
                indexOffset += 10;
            }
        } else {
            shipPositions = boardSpaces.slice(rootIndex, rootIndex + ship.length);
        }
        if (checkValidity(ship, shipPositions, axis)) {
            updatePositions(ship, shipPositions);
            allShips.push(ship);
        } else {
            return shipPositions = [];
        }
        allPositions.push(...shipPositions);
        return shipPositions;
    }

    function autoPlaceShip(shipName, length) {
        const ship = Ship(shipName, length);
        const axis = ['xAxis', 'yAxis'];
        const randomIndex = Math.floor(Math.random() * 100);
        const boardSpace = boardSpaces[randomIndex];
        const axisIndex = Math.floor(Math.random() * 2);
        const shipAxis = axis[axisIndex];

        let shipPositions = [];
        if (shipAxis === 'yAxis') {
            let indexOffset = 0;
            for (let i = 0; i < ship.length; i++) {
                let spaceIndex = boardSpaces.indexOf(boardSpace) + indexOffset;
                if (spaceIndex > 99) break;
                shipPositions.push(boardSpaces[spaceIndex]);
                indexOffset += 10;
            }
        } else {
            shipPositions = boardSpaces.slice(randomIndex, randomIndex + ship.length);
        }
        if (checkValidity(ship, shipPositions, shipAxis)) {
            updatePositions(ship, shipPositions);
            allShips.push(ship);
        } else {
            return autoPlaceShip(shipName, length);
        }
        allPositions.push(...shipPositions);
        return shipPositions;
    }

    function checkValidity(ship, shipPositions, axis) {
        let positionsValid = true;
        const positions = shipPositions;
        const firstSpace = positions[0];
        const lastSpace = positions[positions.length - 1];
        if (axis === 'xAxis') {
            if (firstSpace[0] !== lastSpace[0] || positions.length !== ship.length) positionsValid = false;
        } 
        if (axis === 'yAxis') {
            if (firstSpace[1] !== lastSpace[1] || positions.length !== ship.length) positionsValid = false;
        }
        for (let i = 0; i < positions.length; i++) {
            for (let j = 0; j < allPositions.length; j++) {
                if (allPositions[j] === positions[i]) positionsValid = false;
            }
        }
        return positionsValid;
    }

    function updatePositions(ship, shipPositions) {
        for (let i = 0; i < ship.length; i++) {
            ship.positions[i] = shipPositions[i];
        }
    }

    const allShots = [];
    const missedShots = [];
    const hitShots = [];

    function receiveAttack(boardSpace) { 
        let hit = false;
        allShips.forEach(ship => {
            const positions = ship.positions;
            for (let i = 0; i < positions.length; i++) {
                if (boardSpace === positions[i]) {
                    hit = true;
                    hitShots.push(boardSpace);
                    const spaceIndex = positions.indexOf(boardSpace);
                    ship.hit(spaceIndex);
                    domHandler.displayHit(boardSpace);
                    checkShipStatus(ship);
                }
            }
        });
        if (!hit) {
            missedShots.push(boardSpace);
            domHandler.displayMiss(boardSpace);
        }
        allShots.push(boardSpace);
    }

    function checkShipStatus(ship) {
        if (ship.isSunk()) domHandler.displaySunkShip(ship.name);
    }

    function allShipsSunk() {
        let sunkShips = 0;
        allShips.forEach(ship => {
            if (ship.isSunk()) sunkShips++;
        });
        if (sunkShips === allShips.length) return true;
    }

    return { boardSpaces, allShips, placeShip, autoPlaceShip, allShots, missedShots, hitShots, receiveAttack, allShipsSunk };
}

module.exports = Gameboard;