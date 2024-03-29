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
        let nextShots = findAdjacentSpaces(playerSpaces, hitIndex);

        const shipFound = isShipFound(playerSpaces, prevHits, hitIndex, playerBoard);

        let nextShot = '';
        if (shipFound) {
            const nextToLastHit = prevHits[prevHits.length - 2];
            const nextToLastIndex = playerSpaces.indexOf(nextToLastHit);
            nextShot = calculateNextShot(lastHit, nextToLastIndex, playerSpaces, prevShots, shipFound);
            if (nextShot !== '') nextShots.push(nextShot);
        }

        if (shipFound && nextShot !== '') nextShots = [nextShots.pop()];
        else nextShots = nextShots.filter(shot => !prevShots.includes(shot));
        console.log(nextShots);
        
        if (nextShots.length > 1) {
            const nextShotIndex = Math.floor(Math.random() * nextShots.length);
            playerBoard.receiveAttack(nextShots[nextShotIndex]);
        } else if (nextShots.length === 1) playerBoard.receiveAttack(nextShots[0]);
        else autoPickSpace(playerBoard);
    }

    function findAdjacentSpaces(playerSpaces, hitIndex) {
        const nextShots = [];
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

        return nextShots;
    }

    function isShipFound(playerSpaces, prevHits, hitIndex, playerBoard) {
        const nextToLastHit = prevHits[prevHits.length - 2];
        const nextToLastIndex = playerSpaces.indexOf(nextToLastHit);
        let shipFound = false;
        if (prevHits.length > 1) {
            if (hitIndex === nextToLastIndex - 1 || hitIndex === nextToLastIndex + 1 || hitIndex === nextToLastIndex - 10 || hitIndex === nextToLastIndex + 10) {
                shipFound = true;
                console.log(shipFound);
            }
        }
        if (isShipSunk(playerBoard)) shipFound = false;
        return shipFound;
    }

    let sunkShips = 0;
    function isShipSunk(playerBoard) {
        let newSunkShips = 0;
        const playerShips = playerBoard.allShips;
        playerShips.forEach(ship => {
            let shipSunk = false;
            for (let i = 0; i < ship.length; i++) {
                if (ship[i] !== 'hit') {
                    shipSunk = false;
                    break;
                } else shipSunk = true;
            }
            if (shipSunk) newSunkShips++;
        })
        if (newSunkShips > sunkShips) {
            sunkShips = newSunkShips;
            return true;
        }
    }

    // Still need to work on backtracking shots, but it's gotten a little better
    function calculateNextShot(lastHit, nextToLastIndex, playerSpaces, prevShots, shipFound) {
        const hitIndex = playerSpaces.indexOf(lastHit);
        let nextShot = '';
        if (shipFound && lastHit !== prevShots[prevShots.length - 1]) {
            if (hitIndex - nextToLastIndex === 1) nextShot = playerSpaces[nextToLastIndex - 1];
            else if (hitIndex - nextToLastIndex === -1) nextShot = playerSpaces[nextToLastIndex + 1];
            else if(hitIndex - nextToLastIndex === 10) nextShot = playerSpaces[nextToLastIndex - 10];
            else if(hitIndex - nextToLastIndex === -10) nextShot = playerSpaces[nextToLastIndex + 10];
            else nextShot = '';
            console.log('hi');
        }
        else if (shipFound) {
            if (hitIndex === nextToLastIndex - 1) nextShot = playerSpaces[hitIndex - 1];
            else if (hitIndex === nextToLastIndex + 1) nextShot = playerSpaces[hitIndex + 1];
            else if (hitIndex === nextToLastIndex - 10) nextShot = playerSpaces[hitIndex - 10];
            else if (hitIndex === nextToLastIndex + 10) nextShot = playerSpaces[hitIndex + 10];
            else nextShot = '';
        } 
        for (let i = 0; i < prevShots.length; i++) {
            if (prevShots[i] === nextShot) nextShot = '';
        }
        if (!nextShot) nextShot = '';
        console.log(nextShot);

        return nextShot;
    }

    return { pickSpace, autoPickSpace, smartPickSpace }
};

module.exports = Player;