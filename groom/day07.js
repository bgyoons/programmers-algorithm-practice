// 구름 찾기 깃발

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (+input[0][0] === input.length - 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const [N, K] = input.shift();
  let result = 0;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      let count = 0;
      if (input[row][col] === 1) continue;

      if (row - 1 >= 0) {
        if (col - 1 >= 0 && input[row - 1][col - 1] === 1) count += 1;
        if (input[row - 1][col] === 1) count += 1;
        if (col + 1 < N && input[row - 1][col + 1] === 1) count += 1;
      }
      if (row + 1 < N) {
        if (col - 1 >= 0 && input[row + 1][col - 1] === 1) count += 1;
        if (input[row + 1][col] === 1) count += 1;
        if (col + 1 < N && input[row + 1][col + 1] === 1) count += 1;
      }
      if (col - 1 >= 0 && input[row][col - 1] === 1) count += 1;
      if (col + 1 < N && input[row][col + 1] === 1) count += 1;

      if (count === K) result += 1;
    }
  }
  console.log(result);
})
