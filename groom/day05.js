// 이진수 정렬

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) rl.close();
});

rl.on('close', () => {
  const [count, index] = input[0].split(' ').map(ele => +ele);
  const numbers = input[1].split(' ').map((ele, idx, arr) => {
    let num = +ele;
    let count = 0;
    while (num > 0) {
      if (num % 2 === 1) count += 1;
      num = Math.floor(num / 2);
    }
    return { key: +arr[idx], num: count };
  }).sort((a, b) => (a.num === b.num) ? b.key - a.key : b.num - a.num);

  console.log(numbers[index - 1].key);
})