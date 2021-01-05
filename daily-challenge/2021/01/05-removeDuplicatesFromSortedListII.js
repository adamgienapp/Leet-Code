// PROMPT: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  
  let dummy = new ListNode(null, head);
  let prev = dummy;
  
  while (head) {
      if (head.next && head.next.val === head.val) {
          while (head.next && head.next.val === head.val) {
              head = head.next;
          }
          prev.next = head.next;
      } else {
          prev = prev.next;   
      }
      head = head.next;
  }
  
  return dummy.next;
};