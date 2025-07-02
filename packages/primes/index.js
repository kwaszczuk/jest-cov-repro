const { isPrime } = require("@kwaszczuk/utils");

function getPrimes(from, to) {
  const ret = [];
  for (let i = from; i < to; i++) {
    if (isPrime(i)) {
      ret.push(i);
    }
  }
  return ret;
}

module.exports = {
  getPrimes,
};
