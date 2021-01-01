/**
 * PROMPT:
 * Given a list of non-overlapping axis-aligned rectangles rects,
 * write a function pick which randomly and uniformily picks an integer point
 * in the space covered by the rectangles.
 */

/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects;
  this.weights = [];
  
  const getWeights = () => {
      let currTotal = 0;
      for (const [x1,y1,x2,y2] of this.rects) {
          const width = Math.abs(x2 - x1) + 1;
          const height = Math.abs(y2 - y1) + 1;
          const area = width * height;
          currTotal += area;
          this.weights.push(currTotal);
      }
  }
  
  getWeights();
};

/**
* @return {number[]}
*/
Solution.prototype.pick = function() {
  const total = this.weights[this.weights.length - 1];
  let pickWgt = Math.floor(Math.random() * (total + 1));
  while (pickWgt > total) {
      pickWgt = Math.floor(Math.random() * (total + 1));
  }
  
  let pickIdx = 0;
  while (pickWgt > this.weights[pickIdx]) {
      pickIdx++;
  }

  const rect = this.rects[pickIdx];
  const [x1,y1,x2,y2] = rect;
  
  const randomX = Math.floor(Math.random() * (x2 - x1 + 1)) + x1;
  const randomY = Math.floor(Math.random() * (y2 - y1 + 1)) + y1;
  
  return [randomX, randomY];
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(rects)
* var param_1 = obj.pick()
*/