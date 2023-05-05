class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error('this queue is empty');
    const deleteNode = this.head;
    this.head = deleteNode.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return deleteNode.value;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

module.exports = Queue;
