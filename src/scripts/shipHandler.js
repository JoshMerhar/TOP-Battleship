const Ship = (shipLength) => {
    const length = shipLength;
    let positions = [...Array(shipLength).keys()];

    const hit = (shot) => {
        if (positions[shot] !== 'hit') {
            positions.splice(shot, 1, 'hit');
        } else {
            return false;
        }
    };

    const isSunk = () => {
        let sunk = false;
    };

    return { length, positions, hit, isSunk };
}

module.exports = Ship;