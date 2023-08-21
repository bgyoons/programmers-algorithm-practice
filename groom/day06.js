// 문자열 나누기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (line.length === input[0]) rl.close();
});

rl.on('close', () => {
  const [count, str] = input;
  const maxLength = +count - 2;
  const dic = str.split('');
  let P = dic.slice();
  let strArr = [];

  for (let i = 0; i <= maxLength; i++) {
    const first = str.slice(0, i + 1);
    for (let j = i + 1; j <= maxLength; j++) {
      const second = str.slice(i + 1, j + 1);
      const third = str.slice(j + 1);
      strArr.push([first, second, third]);
      if (!P.includes(first)) P.push(first);
      if (!P.includes(second)) P.push(second);
      if (!P.includes(third)) P.push(third);
    }
    P.sort();
  }
  const sum = strArr.map(arr => arr.reduce((acc, cur) => acc += P.indexOf(cur) + 1, 0));
  console.log(Math.max(...sum));
})
