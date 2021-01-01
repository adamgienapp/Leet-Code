// PROMPT: https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (heights.length === 0) return 0;
    
    let max = 0;
    let stack = [];
    heights.push(0);
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let height = heights[stack.pop()];
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            max = Math.max(max, height * width);
        }
        stack.push(i);
    }
    
    return max;
};