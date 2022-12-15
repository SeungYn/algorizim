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
    if (!this.root) {
      this.root = newNode;
    } else {
    }
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

const tree = BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
