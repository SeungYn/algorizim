class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = this.first;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      throw new Error('empty');
    }
    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    return temp;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
