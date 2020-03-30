var removeNthFromEnd = function(head, n) {
  let start = new ListNode(0);
  start.next = head;
  let first = start;
  let second = start;
  
  for (i = 0; i < n + 1; i++) {
      first = first.next;
  }
  
  while(first) {
      first = first.next;
      second = second.next;
  }
  
  second.next = second.next.next;
  
  
  return start.next;
};
