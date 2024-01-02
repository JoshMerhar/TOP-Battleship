const Ship = (shipName, shipLength) => {
    const name = shipName;
    const length = shipLength;
    const positions = [...Array(shipLength).keys()];

    const hit = (shot) => {
        if (positions[shot] !== 'hit') positions.splice(shot, 1, 'hit');
        return false;
    };

    const isSunk = () => {
        let hitCount = 0;
        positions.forEach(space => {
            if (space === 'hit') hitCount++;
            return false;
        });
        if (hitCount === length) return true;
        return false;
    };

    return { name, length, positions, hit, isSunk };
}

module.exports = Ship;