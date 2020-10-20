/**
 * PROMPT:
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;
  if (!node.neighbors.length) return new Node(node.val);
  
  let data = [];
  let stack = [node];
  let seen = new Set();
  while (stack.length) {
      let { val, neighbors } = stack.pop();
      if (!seen.has(val)) {
          let nVals = neighbors.map((x) => x.val);
          data[val] = [new Node(val), nVals];
          neighbors.forEach((n) => {
              if (!seen.has(n.val)) {
                  stack.push(n);   
              }
          });
          seen.add(val);
      }
  }
  
  let firstNode = null;
  for (let i = 1; i < data.length; i++) {
      if (!data[i]) continue;
      
      let [node, neighborVals] = data[i];
      if (!firstNode) firstNode = node;
      neighborVals.forEach((v) =>{
          node.neighbors.push(data[v][0]);
      });
  }
  
  return firstNode;
};