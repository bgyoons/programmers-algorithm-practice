// 통증

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  input = +line;
  rl.close();
});

rl.on('close', () => {
  const items = {
    painkiller: 14,
    medicine: 7,
    bandage: 1
  }
  let result = 0;

  for (let name in items) {
    const quo = Math.floor(input / items[name]);
    const mod = input % items[name];

    if (quo > 0) {
      result += quo;
      input = mod;
    }
  }
  console.log(result);
})