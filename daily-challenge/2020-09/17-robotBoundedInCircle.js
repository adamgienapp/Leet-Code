/**
 * PROMPT:
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.
 * The robot can receive one of three instructions:
 *  - "G": go straight 1 unit;
 *  - "L": turn 90 degrees to the left;
 *  - "R": turn 90 degress to the right.
 * The robot performs the instructions given in order, and repeats them forever.
 * 
 * Return true if and only if there exists a circle in the plane
 * such that the robot never leaves the circle.
 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  if (!instructions.length) return true;
  instructions = instructions.split('');
  
  const dirs = [[0,-1],[-1,0],[0,1],[1,0]];
  let coord = [0,0];
  let vector = 2;
  const changeDir = (turn) => {
      if (turn === "L") {
          vector = (vector + 3) % 4;
      }
      if (turn === "R") {
          vector = (vector + 1) % 4;
      }
  }
  
  while (instructions.length) {
      let curr = instructions.shift();
      if (curr === "G") {
          let [x, y] = coord;
          let [dX, dY] = dirs[vector];
          coord[0] = x + dX;
          coord[1] = y + dY;
      } else {
          changeDir(curr);
      }
  }
  
  if (coord[0] === 0 && coord[1] === 0) return true;
  else if (vector !== 2) return true;
  else return false;
};