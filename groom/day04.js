// 완벽한 햄버거 만들기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);

  if (input.length === 2) {
    const [count, tastes] = input;
    const hamburger = tastes.split(' ').map(taste => +taste);
    const maxTasteIdx = hamburger.indexOf(Math.max(...hamburger));

    const frontHbg = hamburger.slice(0, maxTasteIdx + 1);
    const backHbg = hamburger.slice(maxTasteIdx);

    const sortedFront = frontHbg.slice().sort((a, b) => a - b);
    const sortedBack = backHbg.slice().sort((a, b) => b - a);

    for (let i = 0; i < frontHbg.length; i++) {
      if (frontHbg[i] !== sortedFront[i]) {
        input = 0;
        rl.close();
        break;
      }
    }

    for (let i = 0; i < backHbg.length; i++) {
      if (backHbg[i] !== sortedBack[i]) {
        input = 0;
        rl.close();
        break;
      }
    }

    input = hamburger.reduce((acc, cur) => acc += cur, 0);
    rl.close();
  }
});

rl.on('close', () => {
  console.log(input);
})