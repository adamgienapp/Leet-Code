// PROMPT: https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const [m, n] = [board.length, board[0].length];
    
    const deltas = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    
    const checkNeighbors = (x, y) => {
        let neighbors = 0;

        for (const [dX, dY] of deltas) {
            let [vX, vY] = [x + dX, y + dY];

            if (vX >= 0 && vX < n && vY >= 0 && vY < m && Math.abs(board[vY][vX]) === 1) neighbors++;
        }

        return neighbors;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let numNeighbors = checkNeighbors(j, i, board);
            let cell = board[i][j];
            if (cell === 1 && (numNeighbors < 2 || numNeighbors > 3)) {
                board[i][j] = -1;
            }
            if (cell === 0 && numNeighbors === 3) {
                board[i][j] = 2;
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = board[i][j];
            if (cell === -1) {
                board[i][j] = 0;
            } else if (cell === 2) {
                board[i][j] = 1;
            }
        }
    }
};