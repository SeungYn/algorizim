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
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0]; // 최대값을 뽑음
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end; // 배열의 가장 마지막 값을 루트로 이동
      this.sinkDown(); // 루트와 자식노드를 비교하는 메서드
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1; // 자식 노드 인덱스를 찾는 마법 (왼쪽 자식)
      let rightChildIdx = 2 * idx + 2; // 자식 노드 인덱스를 찾는 마법 (오른쪽 자식)
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          // 왼쪽 자식이 더 크면 스왑할 대상에 지정
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) || //왼쪽 자식이 부모 보다 더작은데 오른쪽 자식은 부모 보다 크거나
          (swap !== null && rightChild > leftChild) // 왼쪽 자식이 큰데 오른쪽 자식이 더크면 스왑할 대상에 지정
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; // 자식 둘다 안크면 그만둬버리기~
      this.values[idx] = this.values[swap]; // 스왑할 자식과 자리 교환
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap);
heap.insert(55);

class minBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = parseInt((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent < element) break;
      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 1) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    const length = this.values.length;
    const element = this.values[0];
    let index = 0;

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightChildIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
