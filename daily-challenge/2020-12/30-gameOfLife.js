// PROMPT: https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const checkNeighbors = (x, y) => {
        let neighbors = 0;

        const deltaX = [-1, 0, 1];
        const deltaY = [-1, 0, 1];

        for (const dX of deltaX) {
            let vX = x + dX;
            if (vX < 0 || vX === board[0].length) continue;

            for (const dY of deltaY) {
                let vY = y + dY;

                if (vY < 0 || vY === board.length || (dX === 0 && dY === 0)) continue;

                if (board[vY][vX] === 1 || board[vY][vX] === '-') neighbors++;
            }
        }

        return neighbors;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let numNeighbors = checkNeighbors(j, i);
            let cell = board[i][j];
            if (cell === 1) {
                if (numNeighbors < 2 || numNeighbors > 3) {
                    board[i][j] = '-';
                }
            } else {
                if (numNeighbors === 3) {
                    board[i][j] = '+';
                }
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let cell = board[i][j];
            if (cell === '-') {
                board[i][j] = 0;
            } else if (cell === '+') {
                board[i][j] = 1;
            }
        }
    }
};