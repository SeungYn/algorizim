class SinglyLinkedList {
  #head;
  #tail;
  size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.size = 0;
  }

  search(index) {
    let node = this.#head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  addFirst(value) {
    let node = new Node(value);
    node.next = this.#head;
    this.size++;
    this.head = node;

    if (this.#tail === null) {
      this.#tail = node;
    }
  }

  addLast(value) {
    let node = new Node(value);
    this.size++;

    if (this.#head === null) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
  }

  add(value) {
    this.addLast(value);
  }

  set(index, value) {
    const node = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.#head === null) throw new Error('제거할 노드가 없습니다');

    const node = this.#head;
    this.#head = node.next;
    node.next = null;
    this.size--;
    if (this.#head === null) this.#tail = null;

    return node;
  }

  removeIndex(index) {
    const prev = this.get(index - 1);
    const pop = this.#tail;
    prev.next = null;
    this.#tail = prev;

    return pop;
  }

  removeLast() {
    return this.removeIndex(this.size);
  }

  get(index) {
    return this.search(index);
  }
}

class Node {
  item;
  next;

  constructor(item, next) {
    this.item = item;
    this.next = null;
  }
}

const linkList = new SinglyLinkedList();
linkList.add(1);
linkList.add(2);
linkList.add(3);
console.log(linkList);
console.log(linkList.get(0));
