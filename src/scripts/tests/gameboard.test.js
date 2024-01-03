const Gameboard = require('../gameboard');

test('Gameboard is generated', () => {
    expect(Gameboard.boardSpaces[0]).toBe('A1');
});

test('Gameboard places carrier ship on xAxis', () => {
    expect(Gameboard.placeShip('carrier', 5, 'B1', 'xAxis')).toEqual(['B1','B2','B3','B4','B5']);
});

test('Gameboard places submarine on yAxis', () => {
    expect(Gameboard.placeShip('submarine', 3, 'F4', 'yAxis')).toEqual(['F4','G4','H4']);
});

test('Gameboard rejects invalid placement', () => {
    expect(Gameboard.placeShip('battleship', 4, 'A8', 'xAxis')).toEqual([]);
})

test('Successful hit on a ship', () => {
    Gameboard.placeShip('destroyer', 2, 'A1', 'xAxis');
    const ship = Gameboard.allShips[2];
    Gameboard.receiveAttack('A1');
    expect(ship.positions[0]).toBe('hit');
});