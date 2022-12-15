class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkList {
  constructor(val) {
    this.tail = null;
    this.length = 0;
    this.head = null;
  }

  push(val) {
    this.length++;
    this.head = new Node(val);
    this.tail = head;
  }
}
const first = new Node('h1');
