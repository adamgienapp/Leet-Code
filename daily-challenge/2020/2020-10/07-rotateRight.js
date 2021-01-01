/**
 * PROMPT:
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !k) return head;
  
  let size = 1;
  let curr = head;
  while (curr.next) {
      curr = curr.next;
      size++;
  }
  
  k = k % size;
  
  if (k === 0) return head;
  
  let dummy = new ListNode(0, head);
  
  let slow = dummy, fast = dummy;
  
  for (let i = 0; i < k; i++) {
      fast = fast.next;
  }
  
  while (fast.next) {
      slow = slow.next;
      fast = fast.next;
  }
  
  let newHead = slow.next;
  slow.next = null;
  fast.next = head;
  
  return newHead;
};