// 통증(2)

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 2) rl.close();
});

rl.on('close', () => {
  let hurtCount = input[0][0];
  let [A, B] = input[1];
  let quotient = Math.floor(hurtCount / B);
  let count = -1;

  while (quotient >= 0) {
    let pain = hurtCount - quotient * B;

    if (!(pain % A)) {
      count = quotient + parseInt(pain / A);
      break;
    } else quotient -= 1;
  }

  console.log(count);
})