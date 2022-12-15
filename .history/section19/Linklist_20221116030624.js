class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkList {
  constructor() {
    this.tail = null;
    this.length = 0;
    this.head = null;
    this.prev = null;
  }

  push(val) {
    this.length++;
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.prev = null;
    } else {
      this.tail.next = new Node(val);
      this.prev = this.tail;
      this.tail = this.tail.next;
    }
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
  pop() {
    if (this.length < 1) {
      return undefined;
    } else {
      const pop = this.tail;
      this.tail = this.prev;
      this.tail.next = null;
      this.length--;
      return pop;
    }
  }

  pop2() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    return current;
  }

  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(n) {
    if (n === 1) {
      return this.head;
    }

    let cnt = 1;
    let node;
    while (cnt < n) {
      node = this.head.next;
      this.head = this.head.next;
      cnt++;
    }
    return node;
  }
}
const first = new linkList();
first.push('a');
first.push('b');
first.push('c');
first.push('d');
console.log(first.get(1));
