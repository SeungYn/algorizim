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
      const current = this.root;
      while (true) {
        console.log(1);
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
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
tree.insert(11);
tree.insert(12);
console.log(123);
console.log(tree);
