class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      console.log(parentIdx, (idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  remove() {
    const root = this.values[0];
    let lastElement = this.values[this.values.length - 1];
    this.values[0] = lastElement;
    this.values = this.values.splice(0, this.values.length - 1);
    let rootIdx = 0;
    while (true) {
      let leftIndex = rootIdx * 2 + 1;
      let rightIndex = rootIdx * 2 + 2;
      if (
        this.values[rootIdx] > this.values[leftIndex] ||
        this.values[rootIdx] > this.values[rightIndex]
      ) {
        if (this.values[leftIndex] <= this.values[rightIndex]) {
          this.values[rootIdx] = this.values[leftIndex];
          this.values[leftIndex] = lastElement;
          rootIdx = leftIndex;
        } else {
          this.values[rootIdx] = this.values[rightIndex];
          this.values[rightIndex] = lastElement;
          rootIdx = rightIndex;
        }
      } else break;
    }
    return root;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//이진 힙에서 왼쪽 자식의 인덱스는  부모 인덱스 * 2 + 1, 오른쪽 자식 인덱스는 부모 인덱스 * 2 + 2 이다.
//자식에서 부모 인덱스를 찾으려면 (자식 인덱스 -1 ) / 2를 해주면 됨
