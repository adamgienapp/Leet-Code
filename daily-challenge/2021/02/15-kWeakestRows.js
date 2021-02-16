// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const counts = [];
    
    for (const row of mat) {
        const count = row.filter(n => n === 1).length;
        counts.push([counts.length, count]);
    }
    
    counts.sort((a,b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1];
        }
    });
    
    return counts.slice(0, k).map(tup => tup[0]);
};
