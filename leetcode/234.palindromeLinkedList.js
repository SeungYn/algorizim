/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  class Queue {
    constructor() {
      this.values = {};
      this.head = 0;
      this.tail = -1;
      this.size = 0;
    }

    enqueue(val) {
      this.values[++this.tail] = val;
      this.size++;
    }

    dequeue() {
      if (this.head > this.tail) {
        this.head = 0;
        this.tail = 0;
        return undefined;
      }
      const item = this.values[this.head];
      delete this.values[this.head];
      this.head++;
      this.size--;

      return item;
    }

    pop() {
      if (this.head > this.tail) {
        this.head = 0;
        this.tail = 0;
        return undefined;
      }
      const item = this.values[this.tail];
      delete this.values[this.tail];
      this.tail--;
      this.size--;
      return item;
    }

    getLength() {
      return this.tail - this.head;
    }

    isEmpty() {
      return this.size;
    }
  }

  const arr = new Queue();
  while (head) {
    arr.enqueue(head.val);
    head = head.next;
  }

  while (arr.isEmpty() && arr.size > 1) {
    if (arr.dequeue() !== arr.pop()) return false;
  }

  return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const halfLen = parseInt(arr.length / 2);

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
};
