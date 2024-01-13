const Player = () => {
    function pickSpace(boardSpace, enemyBoard) {
        enemyBoard.receiveAttack(boardSpace);
    }

    function autoPickSpace(playerBoard) {
        let alreadyPicked = false;
        const playerSpaces = playerBoard.boardSpaces;
        const prevShots = playerBoard.allShots;
        const randomNum = Math.floor(Math.random() * 100);
        const randomSpace = playerSpaces[randomNum];
        for (let i = 0; i < prevShots.length; i++) {
            if (randomSpace === prevShots[i]) {
                alreadyPicked = true;
                return autoPickSpace(playerBoard);
            }
        }
        if (!alreadyPicked) playerBoard.receiveAttack(randomSpace);
    }

    function smartPickSpace(playerBoard) {
        const playerSpaces = playerBoard.boardSpaces;
        const prevHits = playerBoard.hitShots;
        const prevShots = playerBoard.allShots;
        const lastHit = prevHits[prevHits.length - 1];
        const hitIndex = playerSpaces.indexOf(lastHit);
        const nextShots = [];
        
        if (nextShots.length === 0) {
            let leftSpace = hitIndex - 1;
            let rightSpace = hitIndex + 1;
            let upSpace = hitIndex - 10;
            let downSpace = hitIndex + 10;

            leftSpace = playerSpaces[leftSpace];
            rightSpace = playerSpaces[rightSpace];
            upSpace = playerSpaces[upSpace];
            downSpace = playerSpaces[downSpace];

            if (leftSpace && leftSpace[leftSpace.length - 1] !== '0') nextShots.push(leftSpace);
            if (rightSpace && rightSpace[rightSpace.length - 1] !== '1') nextShots.push(rightSpace);
            if (upSpace) nextShots.push(upSpace);
            if (downSpace) nextShots.push(downSpace);
        }

        const filteredNextShots = nextShots.filter(shot => !prevShots.includes(shot));
        
        if (filteredNextShots.length > 1) {
            const nextShotIndex = Math.floor(Math.random() * filteredNextShots.length);
            playerBoard.receiveAttack(filteredNextShots[nextShotIndex]);
        } else if (filteredNextShots.length === 1) playerBoard.receiveAttack(filteredNextShots[0]);
        else autoPickSpace(playerBoard);
    }

    return { pickSpace, autoPickSpace, smartPickSpace }
};

module.exports = Player;