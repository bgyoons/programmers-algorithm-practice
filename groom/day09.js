// 폭탄 구현히기(2)

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' '));
  const [N, K] = input[0].map(Number);
  if (input.length === N + K + 1) rl.close();
});

rl.on('close', () => {
  const N = +input[0][0];
  const groundState = input.slice(1, 5);
  let ground = groundState.map(arr => arr.map(ele => 0));
  let bombs = [];

  input.slice(5).forEach(position => {
    const [y, x] = position.map(ele => (+ele) - 1);
    bombs = bombs.concat([[y, x], [y - 1, x], [y, x - 1], [y + 1, x], [y, x + 1]]);
  })

  for (let bomb of bombs) {
    const [row, col] = bomb;
    if (row > -1 && row < N && col > -1 && col < N) {
      if (groundState[row][col] === '0') ground[row][col] += 1;
      else if (groundState[row][col] === '@') ground[row][col] += 2;
    }
  }

  let result = ground.flat()[0];
  for (let i = 0; i < ground.flat().length; i++) {
    if (result < ground.flat()[i]) result = ground.flat()[i];
  }

  console.log(result);
})