// function solution(plans) {
//   const stack = [];
//   var answer = [];
//   const new_plans = plans.map((item) => [...item, convertToMinutes(item[1])]);

//   new_plans.sort((a, b) => a[3] - b[3]);

//   let current_task = new_plans[0];
//   let index = 1;

//   while (true) {
//     const next_task = new_plans[index];
//     const current_task_end_time = current_task[3] + +current_task[2];
//     //console.log(current_task, next_task, stack, answer);
//     console.log(`
//     	current_task: ${current_task},
//     	next_task: ${next_task},
//     	stack: ${stack},
//     	answer: ${answer},
//     	index: ${index}
//     `);

//     if (next_task) {
//       if (current_task_end_time === next_task[3]) {
//         // 첫 과제 끝나는 시간이 다음 과제 시작 시간이랑 같은 경우
//         answer.push(current_task[0]);

//         if (next_task) {
//           // 다음 과제가 존재 하는 경우
//           current_task = [...next_task];
//           index++;
//         } else {
//           current_task = stack.pop();
//         }
//       } else if (current_task_end_time < next_task[3]) {
//         answer.push(current_task[0]);
//         if (stack.length > 0) {
//           current_task = stack.pop();
//         } else {
//           current_task = next_task;
//           index++;
//         }
//       } else if (current_task_end_time > next_task[3]) {
//         stack.push(current_task);
//         current_task = next_task;
//         index++;
//       }
//     } else {
//       if (current_task) {
//         answer.push(current_task[0]);
//         current_task = undefined;
//       }
//       while (stack.length) {
//         answer.push(stack.pop()[0]);
//       }
//     }

//     if (index >= plans.length && stack.length === 0 && !current_task) break;
//   }
//   console.log(answer);
//   return answer;
// }

// function convertToMinutes(time) {
//   const [h, m] = time.split(':').map(Number);
//   return h * 60 + m;
// }

// console.log(
//   solution([
//     ['1', '00:00', '30'],
//     ['2', '00:10', '40'],
//     ['3', '00:20', '10'],
//     ['4', '00:25', '10'],
//     ['5', '01:10', '10'],
//   ])
// );

class Queue {
  constructor(list) {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;

    for (let i = 0; i < list.length; i++) {
      if (i === 0) continue;
      this.enqueue([...list[i]]);
    }
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function solution(plans) {
  const newPlans = plans.map((item) => [
    item[0],
    convertToMinutes(item[1]),
    +item[2],
  ]);
  newPlans.sort((a, b) => a[1] - b[1]);
  const queue = new Queue(newPlans);

  const stack = [];
  var answer = [];
  let currentTime = newPlans[0][1];
  let currentTask = newPlans[0];

  while (queue.getLength() > 0) {
    //console.log(queue);
    const currentTaskEndTime = currentTime + currentTask[2];
    const nextTask = queue.peek();
    console.log(queue, stack);
    if (currentTaskEndTime === nextTask[1]) {
      // 현재 과제 끝나는 시간과 다음 과제 시작 시간이 같은 경우
      answer.push(currentTask);
      currentTask = queue.dequeue();
      currentTime = nextTask[1];
    } else if (currentTaskEndTime > nextTask[1]) {
      // 현재 과제가 끝나는 시간이 다음 과제 시작 시간보다 큰 경우
      stack.push([
        currentTask[0],
        nextTask[1],
        currentTaskEndTime - nextTask[1],
      ]);
      currentTask = queue.dequeue();
      currentTime = nextTask[1];
    } else {
      // 현재 과제가 끝나는 시간이 다음 과제 시작 시간보다 작은 경우
      answer.push(currentTask);

      if (stack.length > 0) {
        currentTime = currentTaskEndTime;
        currentTask = stack.pop();
      } else {
        currentTask = queue.dequeue();
        currentTime = currentTask[1];
      }
    }

    // if (queue.getLength() === 0) {
    //   answer.push(currentTask);
    //   while (stack.length) {
    //     answer.push(stack.pop());
    //   }
    //   break;
    // }
  }

  if (queue.getLength() === 0) {
    answer.push(currentTask);
    while (stack.length) {
      answer.push(stack.pop());
    }
  }

  return answer.map((item) => item[0]);
}

function convertToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '15:00', '30'],
    ['computer', '12:30', '100'],
  ])
);

//
