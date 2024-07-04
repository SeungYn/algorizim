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

// 재귀 풀이
var swapPairs = function (head) {
  if (head != null && head.next != null) {
    const node = head.next;
    head.next = swapPairs(head.next.next);
    node.next = head;

    return node;
  }

  return head;
};

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

//  // 반복 풀이
var swapPairs = function (head) {
  let node = new ListNode(0);
  let root = node;
  node.next = head;

  while (node.next != null && node.next.next != null) {
    const a = node.next;
    const b = node.next.next;

    a.next = b.next;
    b.next = a;
    node.next = b;

    node = a;
  }

  return root.next;
};

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var swapPairs = function (head) {
  if (head == null) return head;

  const root = head.next;
  if (root == null) return head;

  swap(head.next, head, 0);
  console.log(head);
  console.log(root);

  function swap(node, prev, index) {
    //console.log(node, prev, index);
    if (node == null) return;
    if (index % 2 > 0) {
      const next = node.next;
      if (next) {
        prev.next = next;
      }
      return swap(node.next, node, index + 1);
    }
    const next = node.next;
    prev.next = next;
    node.next = prev;
    swap(next, prev, index + 1);

    // 이전 노드를 다음 노드에 결합,
    // 현재 노드는 이전노드를 가리키게 함.
  }

  return root;
};
