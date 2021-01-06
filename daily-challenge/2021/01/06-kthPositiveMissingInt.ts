// PROMPT: https://leetcode.com/problems/kth-missing-positive-number/

function findKthPositive(arr: number[], k: number): number {
  let curr: number = 1;
  const missing: number[] = [];
  
  let i: number = 0;
  while(missing.length < k) {
      if (i > arr.length - 1) {
          missing.push(curr);
      }
      while(curr < arr[i]) {
          missing.push(curr);
          curr++;
      }
      curr++;
      i++;
  }
  
  return missing[k-1];
};