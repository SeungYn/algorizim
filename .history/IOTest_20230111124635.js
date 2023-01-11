function makeCounter1{
  let count = 0;

  return function () {
    return count++;
  }
}

