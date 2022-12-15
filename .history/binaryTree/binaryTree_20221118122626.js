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
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
          }
        }
      }
    }
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
tree.insert(3);
tree.insert(1);
tree.insert(11);
console.log(123);
console.log(tree);
