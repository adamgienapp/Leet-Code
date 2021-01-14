// PROMPT: https://leetcode.com/problems/boats-to-save-people/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);

    let boats = 0;

    let [l, r] = [0, people.length - 1];
    while (r >= l) {
      boats++;
      if (people[l] + people[r] <= limit) {
        l++;
      }
      r--;
    }

    return boats;
};