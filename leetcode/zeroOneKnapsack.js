class Cargo {
  price;
  weight;

  constructor(price, weight) {
    this.price = price;
    this.weight = weight;
  }
}

function zeroOneKnapsack(cargos) {
  const capacity = 15;
  const pack = Array.from(
    { length: cargos.length + 1 },
    () => new Array(capacity)
  );

  for (let i = 0; i <= cargos.length; i++) {
    for (let c = 0; c <= capacity; c++) {
      if (i === 0 || c === 0) pack[i][c] = 0;
      else if (cargos[i - 1].weight <= c) {
        pack[i][c] = Math.max(
          cargos[i - 1].price + pack[i - 1][c - cargos[i - 1].weight],
          pack[i - 1][c]
        );
      } else {
        pack[i][c] = pack[i - 1][c];
      }
    }
  }
  console.log(pack);
  return pack[cargos.length][capacity];
}

const cargos = new Array();
cargos.push(new Cargo(4, 12));
cargos.push(new Cargo(2, 1));
cargos.push(new Cargo(10, 4));
cargos.push(new Cargo(1, 1));
cargos.push(new Cargo(2, 2));

console.log(zeroOneKnapsack(cargos));
