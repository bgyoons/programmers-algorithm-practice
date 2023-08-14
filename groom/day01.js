// 운동 중독 플레이어

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  const [W, R] = line.split(' ');
  input = Math.floor(W * (1 + R / 30));
  rl.close();
});

rl.on('close', () => {
  console.log(input);
})