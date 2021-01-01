/**
 * PROMPT:
 * Given a set of intervals, for each of the interval i, check if there exists an interval j
 * whose start point is bigger than or equal to the end point of the interval i,
 * which can be called that j is on the "right" of i. For any interval i, you need to store
 * the minimum interval j's index, which means that the interval j has the minimum
 * start point to build the "right" relationship for interval i.
 * 
 * If the interval j doesn't exist, store -1 for the interval i.
 * Finally, you need output the stored value of each interval as an array.
 * 
 * Note:
 * You may assume the interval's end point is always bigger than its start point.
 * You may assume none of these intervals have the same start point.
 */

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    if (intervals.length < 2) return [-1];
    
    const result = Array(intervals.length).fill(-1);
    
    const sortedStarts = intervals.map((v, i) => [v[0], i]).sort((a,b) => a[0] - b[0]);
    
    for (let i = 0; i < intervals.length; i++) {
        const val = intervals[i][1];
        let min = 0;
        let max = sortedStarts.length - 1;
        
        while (min <= max) {
            let mid = Math.floor((min + max) / 2);
            if (sortedStarts[mid][0] === val) {
                if (sortedStarts[mid][1] === i) {
                    min = mid + 1;
                } else {
                    min = mid;
                    break;
                }
            }
            if (sortedStarts[mid][0] > val) {
                max = mid - 1;
            }
            if (sortedStarts[mid][0] < val) {
                min = mid + 1;
            }
        }
        
        if (min < intervals.length) {
            result[i] = sortedStarts[min][1];
        }
    }
    
    return result;
};