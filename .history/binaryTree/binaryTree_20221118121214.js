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
      parentNode = node;
      this.root = node;
      console.log(parentNode);
      console.log(this.root);
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
