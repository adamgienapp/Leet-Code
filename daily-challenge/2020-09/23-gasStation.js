/**
 * PROMPT:
 * There are N gas stations along a circular route, where the
 * amount of gas at station i is gas[i].
 * 
 * You have a car with an unlimited gas tank and it costs cost[i]
 * of gas to travel from station i to its next station (i+1).
 * You begin the journey with an empty tank at one of the gas stations.
 * 
 * Return the starting gas station's index if you can travel around
 * the circuit once in the clockwise direction, otherwise return -1.
 * 
 * Note:
 *  - If there exists a solution, it is guaranteed to be unique.
 *  - Both input arrays are non-empty and have the same length.
 *  - Each element in the input arrays is a non-negative integer.
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (sum(gas) < sum(cost)) return -1;
  
  let [fuel, start] = [0,0];
  for (let i = start; i < gas.length; i++) {
      fuel += gas[i] - cost[i];
      if (fuel < 0) {
          fuel = 0;
          start = i + 1;
      }
  }
  
  return start;
};

function sum(a) {
  return a.reduce((a,b) => a + b);
}