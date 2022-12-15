let arr = ['사과', '오렌지', '배'];

for (let key in arr) {
  console.log(arr[key]); // 사과, 오렌지, 배
}

for (let key of arr) {
  console.log(arr[key]); // 사과, 오렌지, 배
}
