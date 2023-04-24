class Node {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

class Queue {
  first = null;
  last = null;
  size = 0;
  constructor() {}

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
      this.size++;
      return this;
    }

    this.last.next = node;
    this.last = node;
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;
    const deleted = this.first;
    this.first = this.first.next;
    this.size--;
    return deleted;
  }

  tour() {
    let currentNode = this.first;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode?.next;
    }
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
//q.tour();
q.dequeue();
console.log(q);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
