/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return 0;
  
  let [nums1,nums2] = [[],[]];
  let curr = l1;
  while (curr) {
      nums1.push(curr.val);
      curr = curr.next;
  }
  curr = l2;
  while (curr) {
      nums2.push(curr.val);
      curr = curr.next;
  }
  let remainder = 0;
  let newVals = [];
  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    let v1 = nums1[nums1.length - 1 - i] || 0;
    let v2 = nums2[nums2.length - 1 - i] || 0;
    let e = v1 + v2 + remainder;
    if (e > 9) {
      remainder = 1;
    } else {
      remainder = 0;
    }
    newVals.push(e % 10);
  }
  if (remainder) {
      newVals.push(remainder);
  }

  let head = new ListNode(newVals[newVals.length - 1]);
  let n = head;
  let i = 1;
  while (newVals[newVals.length - 1 - i] !== undefined) {
    n.next = new ListNode(newVals[newVals.length - 1 - i]);
    n = n.next;
    i++;
  }

  return head;
};