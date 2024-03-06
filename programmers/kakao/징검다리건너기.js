function solution(stones, k) {
  const arr = Array.from({ length: 200000 }, () => 200000000);
  let start = 1;
  let end = Math.max(...arr);
  let result = 0;
  if (stones.length === 1) return stones[0];
  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    let count = 0;
    for (const stone of stones) {
      if (stone - mid <= 0) {
        count++;
        if (count >= k) {
          result = mid;
          end = mid - 1;
          break;
        }
      } else {
        count = 0;
      }
    }

    if (count < k) {
      start = mid + 1;
    }
  }

  return result;
}

// class Queue{

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enqueue(value){
//         const node = new Node(value);
//         if(this.head === null){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     dequeue(){
//         const deleteNode = this.head;
//         if(deleteNode.next === null){
//             this.tail = null;
//             this.head = null;
//             deleteNode.next = null;
//         }else{
//             this.head = this.head.next;
//             this.head.prev = null;
//         }
//         this.size--;
//         return deleteNode.value;
//     }

//     pop(){
//         const deleteNode = this.tail;
//         this.tail = deleteNode.prev;
//         if(this.tail !== null) this.tail.next=null;
//         else{
//             this.head = null;
//         }
//         deleteNode.prev = null;

//         this.size--;
//         return deleteNode.value;
//     }
// }

// class Node{
//     constructor(val){
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// function solution(stones, k) {
//     var answer = 0;
//     let res = Infinity;
//     const arr = [];
//     const q = new Queue();

//     if(stones.length === 1) return stones[0];

//     for(let i = 0; i < stones.length; i++){

//         while(q.size > 0 && stones[q.tail.value] <= stones[i]) q.pop();

//         q.enqueue(i);
//         //console.log(q, res);

//         if(q.head.value ===  i - k) q.dequeue();

//         if(i >= k - 1) res = Math.min(res, stones[q.head.value]);
//     }

//     return res;
// }
