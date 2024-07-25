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
 *
 */

var sortList = function (head) {
  if (head === null || head.next === null) return head;

  // half는 리스트를 두개로 분리했을 때 연결을 끊어주기 위한 변수
  let half = null,
    slow = head,
    fast = head;

  // 러너 기법으로 중앙을 찾는 잡기술
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    half = slow;
    slow = slow.next;
  }
  // 분리될 지점을 찾으면 연결을 끊음
  half.next = null;

  //console.log(half, slow, fast);
  const l1 = sortList(head);
  const l2 = sortList(slow);
  //console.log(l1, l2);

  return mergeTwoLists(l1, l2);

  // 하나의 노드로 분리됐을 때, 두 노드를 비교해서 정렬 시킴
  function mergeTwoLists(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val > l2.val) {
      const temp = l1;
      l1 = l2;
      l2 = temp;
    }

    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};
