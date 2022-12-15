class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    this.insertHelper(this.root, newNode);
  }

  insertHelper(parentNode, node) {
    if (!parentNode) {
      parentNode = newNode;
    } else {
      if (parentNode.value > node.value) {
        this.insertHelper(parentNode.left, node);
      } else {
        this.insertHelper(parentNode.right, node);
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
