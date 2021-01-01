// PROMPT: https://leetcode.com/problems/check-array-formation-through-concatenation/

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let valid = true;
    
    for (let i = 0; i < pieces.length && valid; i++) {
        let idx = arr.indexOf(pieces[i][0]);
        
        if (idx >= 0) {
            for (let j = 0; j < pieces[i].length; j++) {
                if (arr[idx] !== pieces[i][j]) {
                    valid = false;
                    break;
                }
                idx++;
            }
        } else {
            valid = false;
        }
    }
    
    return valid;
};