const Player = () => {
    function pickSpace(boardSpace, enemyBoard) {
        enemyBoard.receiveAttack(boardSpace);
    }

    function autoPickSpace(enemyBoard) {
        let alreadyPicked = false;
        const enemySpaces = enemyBoard.boardSpaces;
        const prevShots = enemyBoard.allShots;
        const randomNum = Math.floor(Math.random() * 100);
        const randomSpace = enemySpaces[randomNum];
        for (let i = 0; i < prevShots.length; i++) {
            if (randomSpace === prevShots[i]) {
                alreadyPicked = true;
                return autoPickSpace(enemyBoard);
            }
        }
        if (!alreadyPicked) enemyBoard.receiveAttack(randomSpace);
    }

    return { pickSpace, autoPickSpace }
};

module.exports = Player;