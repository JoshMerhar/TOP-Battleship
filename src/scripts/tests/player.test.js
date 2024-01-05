const Player = require('../player');
const Gameboard = require('../gameboard');

const player = Player();
const enemyBoard = Gameboard();

test('Player can place a shot', () => {
    player.pickSpace('A1', enemyBoard);
    expect(enemyBoard.missedShots[0]).toBe('A1');
});

test('Computer can take a shot', () => {
    player.autoPickSpace(enemyBoard);
    player.autoPickSpace(enemyBoard);
    expect(enemyBoard.missedShots.length).toBe(3);
});