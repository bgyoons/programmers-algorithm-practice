// 폭탄 구현히기(2)

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K;
rl.on('line', (line) => {
  input.push(line.split(' '));
  if (input.length === 1) [N, K] = input[0].map(Number);
  if (input.length === N + K + 1) rl.close();
});

rl.on('close', () => {
  const position = input.slice(N + 1).map(arr => arr.map(e => (+e) - 1));
  const score = input.slice(1, N + 1).map(arr => arr.map(e => e === '@' ? 2 : e === '#' ? 0 : 1));
  let ground = Array(N).fill('').map(_ => Array(N).fill(0));

  position.forEach(([y, x]) => {
    ground[y][x] += score[y][x];
    if (y > 0) ground[y - 1][x] += score[y - 1][x];
    if (x > 0) ground[y][x - 1] += score[y][x - 1];
    if (y < N - 1) ground[y + 1][x] += score[y + 1][x];
    if (x < N - 1) ground[y][x + 1] += score[y][x + 1];
  })

  console.log(Math.max(...ground.flat()));
})