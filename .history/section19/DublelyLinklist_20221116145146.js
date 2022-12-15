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

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null; //이전 prev에는 next가 지정되었기 때문
    }
    this.length--;
    temp.prev = null;

    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    console.log(this);
    return oldHead;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) return undefined;

    if (index < parseInt(this.length / 2)) {
      let cnt = 0;
      let node = this.head;
      while (cnt < index) {
        node = node.next;
        cnt++;
      }
      return node;
    } else {
      let cnt = this.length - 1;
      let node = this.tail;
      while (cnt > index) {
        node = node.prev;
        cnt--;
      }
      return node;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    temp.prev = newNode;
    newNode.prev = prev;
    newNode.next = temp;
    prev.next = newNode;
    this.length++;
    console.log(this);
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    const beforeNode = this.get(index - 1);
    if (!node) return false;

    const removed = beforeNode.next;
    (beforeNode.next = removed.next), (removed.next.prev = beforeNode);
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.insert(3, 4));
