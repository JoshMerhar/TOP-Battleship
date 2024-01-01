const Ship = (shipLength) => {
    const length = shipLength;
    let positions = [...Array(shipLength).keys()];

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

    return { length, positions, hit, isSunk };
}

module.exports = Ship;