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
var oddEvenList = function (head) {
  if (head === null) return null;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  // 짝수노드를 기준으로 조건을 세움
  // 짝수 노드가 존재한다는건 홀수노드는 처리가 된다는 뜻.
  while (even !== null && even.next !== null) {
    //console.log(odd, even);
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};
