/**
 * PROMPT:
 * We are given an array asteroids of integers representing asteroids in a row.
 * 
 * For each asteroid, the absolute value represents its size, and the sign represents
 * its direction (positive meaning right, negative meaning left).
 * Each asteroid moves at the same speed.
 * 
 * Find out the state of the asteroids after all collisions.
 * If two asteroids meet, the smaller one will explode.
 * If both are the same size, both will explode.
 * Two asteroids moving in the same direction will never meet.
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  if (!asteroids.length) return [];
  
  let result = [];
  for (let i = 0; i < asteroids.length; i++) {
      let right = result[result.length-1];
      if (asteroids[i] < 0 && right > 0) {
          collide(result, asteroids[i]);
      } else {
          result.push(asteroids[i]);
      }
  }
  
  return result;
};

function collide(arr, val) {
  let colliding = true;
  while (colliding) {
      let right = arr[arr.length-1];
      if (right > 0) {
          if (right < Math.abs(val)) {
              arr.pop();
          } else if (right === Math.abs(val)) {
              arr.pop();
              colliding = false;
          } else {
              colliding = false;
          }
      } else {
          colliding = false;
          arr.push(val);
      }
  }
}