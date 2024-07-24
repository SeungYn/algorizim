/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class PQ {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentItem = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentItem = this.values[parentIndex];

      if (parentItem >= currentItem) break;

      this.values[parentIndex] = currentItem;
      this.values[currentIndex] = parentItem;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const deleteItem = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return deleteItem;
  }

  sinkDown() {
    let currentIndex = 0;
    let currentItem = this.values[currentIndex];

    while (currentIndex < this.values.length) {
      let leftIndex,
        rightIndex,
        left,
        right,
        swap = null;
      leftIndex = currentIndex * 2 + 1;
      rightIndex = currentIndex * 2 + 2;

      if (leftIndex < this.values.length) {
        left = this.values[leftIndex];

        if (left > currentItem) {
          swap = leftIndex;
        }
      }

      if (rightIndex < this.values.length) {
        right = this.values[rightIndex];

        if (
          (swap === null && right > currentItem) ||
          (swap !== null && right > left)
        ) {
          swap = rightIndex;
        }
      }

      if (!swap) break;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentItem;
      currentIndex = swap;
    }
  }
}

var findKthLargest = function (nums, k) {
  let result = 0;
  const p = new PQ();
  for (let a of nums) {
    p.enqueue(a);
  }

  while (k--) result = p.dequeue();

  return result;
};
