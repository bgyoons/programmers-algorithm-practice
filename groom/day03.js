// 합 계산기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let count;

rl.on('line', (line) => {
  if (line.includes('+')) {
    const [num1, num2] = line.split('+');
    input += (+num1) + (+num2);
    count -= 1;
  } else if (line.includes('-')) {
    const [num1, num2] = line.split('-');
    input += (+num1) - (+num2);
    count -= 1;
  } else if (line.includes('*')) {
    const [num1, num2] = line.split('*');
    input += (+num1) * (+num2);
    count -= 1;
  } else if (line.includes('/')) {
    const [num1, num2] = line.split('/');
    input += Math.floor((+num1) / (+num2));
    count -= 1;
  } else count = +line;

  if (count === 0) {
    rl.close();
  }
});

rl.on('close', () => {
  console.log(input);
})