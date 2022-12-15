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
      return;
    }
    this.insertHelper(this.root, newNode);
  }

  insertHelper(parentNode, node) {
    console.log(1);
    console.log(parentNode, node);
    if (!parentNode) {
      parentNode = node;
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
tree.insert(10);
tree.insert(9);
tree.insert(11);
console.log(tree);
