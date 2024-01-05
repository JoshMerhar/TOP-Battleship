const Gameboard = require('../gameboard');

const board = Gameboard();

test('Gameboard is generated', () => {
    expect(board.boardSpaces[0]).toBe('A1');
});

test('Gameboard places cruiser on xAxis', () => {
    expect(board.placeShip('cruiser', 3, 'B1', 'xAxis')).toEqual(['B1','B2','B3']);
});

test('Gameboard places submarine on yAxis', () => {
    expect(board.placeShip('submarine', 3, 'F4', 'yAxis')).toEqual(['F4','G4','H4']);
});

test('Gameboard rejects invalid placement on xAxis', () => {
    expect(board.placeShip('battleship', 4, 'A8', 'xAxis')).toEqual([]);
});

test('Gameboard rejects invalid placement on yAxis', () => {
    expect(board.placeShip('battleship', 4, 'I5', 'yAxis')).toEqual([]);
});

test('Successful hit on a ship', () => {
    board.placeShip('destroyer', 2, 'A1', 'xAxis');
    const ship = board.allShips[2];
    board.receiveAttack('A1');
    expect(ship.positions[0]).toBe('hit');
});

test('Record missed shot', () => {
    board.receiveAttack('J10');
    expect(board.missedShots[0]).toBe('J10');
});

test('Check to confirm all ships are not yet sunk', () => {
    expect(board.allShipsSunk()).toBeFalsy();
});

test('Confirms all ships are sunk', () => {
    board.receiveAttack('B1');
    board.receiveAttack('B2');
    board.receiveAttack('B3');
    board.receiveAttack('F4');
    board.receiveAttack('G4');
    board.receiveAttack('H4');
    board.receiveAttack('A2');
    expect(board.allShipsSunk()).toBeTruthy();
});