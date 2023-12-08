/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let currentPlantedFlowers = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) continue;
    if (flowerCheck(i)) {
      currentPlantedFlowers++;
      flowerbed[i] = 1;
    }
  }

  return currentPlantedFlowers >= n;

  function flowerCheck(i) {
    let flag = true;
    const leftEnd = i - 1;
    const rightEnd = i + 1;

    if (!(leftEnd < 0)) {
      if (flowerbed[leftEnd]) flag = false;
    }

    if (!(rightEnd > flowerbed.length - 1)) {
      if (flowerbed[rightEnd]) flag = false;
    }
    return flag;
  }
};
