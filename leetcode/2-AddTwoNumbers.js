/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1String = parsingList(l1, '');
  const l1Int = [...l1String].reverse().join('');
  const l2String = parsingList(l2, '');
  const l2Int = [...l2String].reverse().join('');
  console.log(l1String);
  console.log(l1Int);
  console.log(l2String);
  console.log(l2Int);
  const sum = [...(BigInt(l1Int) + BigInt(l2Int)).toString()]
    .reverse()
    .map((i) => +i);

  console.log(sum);
  return makeLinkedList(0, sum, null);

  function parsingList(node, result) {
    if (node == null) return result;
    result += node.val;
    return parsingList(node.next, result);
  }

  function makeLinkedList(index, str, node) {
    if (index >= str.length) return node;
    const newNode = new ListNode(str[index], null);
    if (node != null) node.next = newNode;
    makeLinkedList(index + 1, str, newNode);
    return newNode;
  }
};
