var mergeTwoLists = function (list1, list2) {
  let result = null;
  let head = null;

  if (list1 && list2) {
    if (list1.val <= list2.val) {
      result = list1;
      list1 = list1?.next;
    } else {
      result = list2;
      list2 = list2?.next;
    }
  } else if (list1 && !list2) {
    result = list1;
    list1 = list1?.next;
  } else {
    result = list2;
    list2 = list2?.next;
  }
  console.log(result);
  head = result;
  while (list1 || list2) {
    result = result.next;
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        result.next = list1;
        list1 = list1?.next;
      } else {
        result.next = list2;
        list2 = list2?.next;
      }
    } else if (list1 && !list2) {
      result.next = list1;
      list1 = list1?.next;
    } else {
      result.next = list2;
      list2 = list2?.next;
    }
  }
  console.log(head);

  return head;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
