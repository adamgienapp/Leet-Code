// Write insertion sort for a LL

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
var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  
  let newHead = head;
  let t = head;
  let i = t.next;
  let temp;
  while (t.next) {
      let prev = null;
      let curr = newHead;
      let swapped = false;
      if (i.val < newHead.val) {
          temp = i.next;
          i.next = curr;
          newHead = i;
          t.next = temp;
          i = t.next;
      } else if (i.val >= t.val) {
          t = i;
          i = t.next;
      } else {
          while (curr !== i && !swapped) {
              if (i.val < curr.val) {
                  temp = i.next;
                  prev.next = i;
                  i.next = curr;
                  t.next = temp;
                  i = temp;
                  swapped = true;
              }
              prev = curr;
              curr = curr.next;
          }
      }
  }
  
  return newHead;
};