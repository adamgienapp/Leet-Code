// PROMPT: given 4 points, return whether or not they create a square

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  let points = [...arguments];
  points.sort((a,b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
  });
  
  const getDist = (a, b) => {
      return Math.sqrt(Math.abs(a[0]-b[0]) ** 2 + Math.abs(a[1]-b[1]) ** 2);
  }
  
  if (getDist(points[0], points[1]) === getDist(points[0], points[2])
     && getDist(points[3], points[1]) === getDist(points[3], points[2])
     && getDist(points[0], points[3]) === getDist(points[1], points[2])
     && points[0][0] !== points[3][0]) {
      return true;
  }
  
  return false;
};