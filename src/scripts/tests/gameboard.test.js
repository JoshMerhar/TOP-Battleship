const Gameboard = require('../gameboard');

test('Gameboard is generated', () => {
    expect(Gameboard.boardSpaces[0]).toBe('A1');
});

test('Gameboard places cruiser on xAxis', () => {
    expect(Gameboard.placeShip('cruiser', 3, 'B1', 'xAxis')).toEqual(['B1','B2','B3']);
});

test('Gameboard places submarine on yAxis', () => {
    expect(Gameboard.placeShip('submarine', 3, 'F4', 'yAxis')).toEqual(['F4','G4','H4']);
});

test('Gameboard rejects invalid placement on xAxis', () => {
    expect(Gameboard.placeShip('battleship', 4, 'A8', 'xAxis')).toEqual([]);
});

test('Gameboard rejects invalid placement on yAxis', () => {
    expect(Gameboard.placeShip('battleship', 4, 'I5', 'yAxis')).toEqual([]);
});

test('Successful hit on a ship', () => {
    Gameboard.placeShip('destroyer', 2, 'A1', 'xAxis');
    const ship = Gameboard.allShips[2];
    Gameboard.receiveAttack('A1');
    expect(ship.positions[0]).toBe('hit');
});

test('Record missed shot', () => {
    Gameboard.receiveAttack('J10');
    expect(Gameboard.missedShots[0]).toBe('J10');
});

test('Check to confirm all ships are not yet sunk', () => {
    expect(Gameboard.allShipsSunk()).toBeFalsy();
});

test('Confirms all ships are sunk', () => {
    Gameboard.receiveAttack('B1');
    Gameboard.receiveAttack('B2');
    Gameboard.receiveAttack('B3');
    Gameboard.receiveAttack('F4');
    Gameboard.receiveAttack('G4');
    Gameboard.receiveAttack('H4');
    Gameboard.receiveAttack('A2');
    expect(Gameboard.allShipsSunk()).toBeTruthy();
});