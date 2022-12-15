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
    if (!this.head) {
      this.head = new Node(val);
      this.tail = head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    return this;
  }
}
const first = new Node('h1');
