/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class PriorityQueue1 {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode.val <= currentNode.val) break;

      this.values[parentIndex] = currentNode;
      this.values[currentIndex] = parentNode;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const node = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return node;
  }

  sinkDown() {
    let currentIndex = 0;
    let currentNode = this.values[0];
    const totalLen = this.values.length;

    while (currentIndex < this.values.length) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let leftChild,
        rightChild,
        swap = null;

      if (leftChildIndex < totalLen) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.val < currentNode.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < totalLen) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.val < currentNode.val) ||
          (swap !== null && rightChild.val < leftChild.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentNode;
      currentIndex = swap;
    }
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];
  const q = new PriorityQueue1();
  const root = new ListNode(0);
  let tail = root;

  for (let head of lists) {
    if (head === null) continue;
    q.enqueue(head);
  }

  console.log(q);
  while (q.values.length > 0) {
    const min = q.dequeue();

    tail.next = min;
    const next = min.next;
    if (next) q.enqueue(next);
    tail = tail.next;
  }

  console.log(root);
  return root.next;
};
