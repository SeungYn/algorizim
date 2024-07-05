/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let root = new ListNode(0);
  root.next = head;
  let start = root;

  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }

  let end = start.next;

  for (let i = 0; i < right - left; i++) {
    const temp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = temp;
  }

  return root.next;
};

/**
 * 키 포인트는 left 이전까지 start를 명시, 그후 right 만큼 포인터 변환
 */
