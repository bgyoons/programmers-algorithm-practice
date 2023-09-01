// 과일 구매

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 1) [N, K] = input[0];
  if (input.length === N + 1) {
    input.shift();
    rl.close();
  }
});

rl.on('close', () => {
  let total = 0;
  input.sort((a, b) => b[1] / b[0] === a[1] / a[0] ? a[0] - b[0] : b[1] / b[0] - a[1] / a[0]);

  while (K) {
    for (let [price, full] of input) {
      if (K - price >= 0) {
        K -= price;
        total += full;
      } else {
        let pieceFull = full / price;
        total += K * pieceFull;
        K = 0;
        break;
      }
    }
    break;
  }

  console.log(total);
})