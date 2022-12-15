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
    const element = this.values[idx];
    //while (true) {
    let parentIdx = Math.floor((idx - 1) / 2);
    console.log(parentIdx);
    //}
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
