class MaxBinaryHeap {
  values;
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
    console.log(this.values);
    return true;
  }

  bubbleUp() {
    let nowIndex = this.values.length - 1;
    let nowElement = this.values[nowIndex];
    while (nowIndex > 0) {
      let parentIndex = parseInt((nowIndex - 1) / 2);
      let parentElement = this.values[parentIndex];

      if (parentElement >= nowElement) break;
      this.values[nowIndex] = parentElement;
      this.values[parentIndex] = nowElement;
      nowIndex = parentIndex;
    }
  }

  dequeue() {
    if (this.values.length === 0) throw new Error('this queue is empty');

    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    console.log(this.values);
    return max;
  }

  sinkDown() {
    let nowIndex = 0;
    let nowElement = this.values[0];
    let len = this.values.length;

    while (true) {
      const leftChildIndex = 2 * nowIndex + 1;
      const rightChildIndex = 2 * nowIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < len) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > nowElement) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap !== null && rightChild > leftChild) ||
          (swap === null && rightChild > nowElement)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;

      this.values[nowIndex] = this.values[swap];
      this.values[swap] = nowElement;
      nowIndex = swap;
    }
  }
}

const q = new MaxBinaryHeap();
q.enqueue(1);
q.enqueue(6);
q.enqueue(4);
q.enqueue(10);
q.enqueue(99);
console.log(q.values);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
