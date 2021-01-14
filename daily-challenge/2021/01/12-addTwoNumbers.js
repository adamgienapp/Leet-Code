// PROMPT: https://leetcode.com/problems/add-two-numbers/

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
  const dummy = new ListNode();
  
  let curr = dummy;
  let remainder = 0;
  while (l1 || l2) {
      let num1 = l1 ? l1.val : 0;
      let num2 = l2 ? l2.val : 0;
      let val = (num1 + num2 + remainder) % 10;
      remainder = Math.floor((num1 + num2 + remainder)/10);
      curr.next = new ListNode(val);
      curr = curr.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  
  if (remainder) {
      curr.next = new ListNode(remainder);
  }
  
  return dummy.next;
};