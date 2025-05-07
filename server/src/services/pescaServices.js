const peixes = require('../data/peixes.json');

function sortearPeixe() {
  const rand = Math.random() * 100;
  let acumulado = 0;
  for (let p of peixes) {
    acumulado += p.chance;
    if (rand <= acumulado) return p;
  }
  return peixes[0];
}

module.exports = { sortearPeixe };
