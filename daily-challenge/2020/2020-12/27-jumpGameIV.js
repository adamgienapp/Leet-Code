// PROMPT: https://leetcode.com/problems/jump-game-iv/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const valLocations = getValLocations(arr);

    const visited = new Set([0]);
    
    let level = [0];
    let jumps = 0;
    
    while (!visited.has(arr.length - 1)) {
        jumps++;
        const newLevel = [];
        for (let idx of level) {
            for (let node of getNeighbors(arr, idx, valLocations, visited)) {
                newLevel.push(node);
                visited.add(node);
                if (node === arr.length - 1) break;
            }
            if (visited.has(arr.length - 1)) break;
        }
        level = newLevel;
    }

    return jumps;
};

function getValLocations(arr) {
    const valLocations = new Map();
    arr.forEach((val, idx) => {
       if (!valLocations.has(val)) {
          valLocations.set(val, []);
       }
       valLocations.get(val).push(idx);
    });

    return valLocations;
}

function getNeighbors(arr, idx, valLocs, seen) {
    const result = [];
    if (idx > 0 && arr[idx - 1] !== arr[idx] && !seen.has(idx - 1)) {
        result.push(idx - 1);
    }
    if (idx < arr.length - 1 && arr[idx + 1] !== arr[idx] && !seen.has(idx + 1)) {
        result.push(idx + 1);
    }
    if (valLocs.has(arr[idx])) {
        for (let i of valLocs.get(arr[idx])) {
            if (i !== idx && !seen.has(i)) {
                result.push(i);
            }
        }
        valLocs.delete(arr[idx]);
    }
    
    return result;
}