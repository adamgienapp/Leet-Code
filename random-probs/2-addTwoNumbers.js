var addTwoNumbers = function(l1, l2) {
  var node = null;
  var carry = arguments[2];
  if (l1 || l2) {
      var val1 = l1 ? l1.val : 0;
      var val2 = l2 ? l2.val : 0;
      var val = carry ? val1 + val2 + 1 : val1 + val2;
      var next1 = l1 ? l1.next : null;
      var next2 = l2 ? l2.next : null;
      node = new ListNode(val % 10);
      node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
      node  = new ListNode(1);
  }
  return node;
};
