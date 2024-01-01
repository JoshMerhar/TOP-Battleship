const Ship = require('../shipHandler');

test('Ship has length property', () => {
    const testShip = Ship(4);
    expect(testShip.length).toBe(4);
});

test('Generate 4 spaces for the ship', () => {
    const testShip = Ship(4);
    expect(testShip.positions).toEqual([0,1,2,3]);
});

test('Ship gets hit', () => {
    const testShip = Ship(2);
    testShip.hit(1);
    expect(testShip.positions[1]).toBe('hit');
});