class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.value = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const temp = this.tail;
    console.log(temp);
    this.tail = this.tail.prev;
    this.length--;
    temp.prev = null;
    return temp;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.pop());
