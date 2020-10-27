// PROMPT: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3509/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
      if (!fast) return null;
      slow = slow.next;
      fast = fast.next;
      if (fast) fast = fast.next;
  }
  
  slow = head;
  
  while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
  }
  
  return slow;
};