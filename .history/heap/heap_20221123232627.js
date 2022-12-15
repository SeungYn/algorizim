class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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
        this.values[rootIdx > this.values[rightIndex]]
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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(15);
console.log(heap);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap);

//이진 힙에서 왼쪽 자식의 인덱스는  부모 인덱스 * 2 + 1, 오른쪽 자식 인덱스는 부모 인덱스 * 2 + 2 이다.
//자식에서 부모 인덱스를 찾으려면 (자식 인덱스 -1 ) / 2를 해주면 됨
