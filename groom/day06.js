// 문자열 나누기

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
  const [N, S] = input;
  let P = new Set();
  let wordList = [];

  for (let i = 1; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const first = S.slice(0, i);
      const second = S.slice(i, j);
      const third = S.slice(j);

      wordList.push([first, second, third]);
      P.add(first);
      P.add(second);
      P.add(third);
    }
  }

  const dictionary = [...P].sort();
  let maxScore = 0;

  for (const list of wordList) {
    let score = 0;
    for (const word of list) {
      score += dictionary.indexOf(word) + 1;
    }
    if (score > maxScore) maxScore = score;
  }

  console.log(maxScore);
  // const score = cases.map((arr, idx) => arr.reduce((acc, cur) => acc += P.indexOf(cur) + 1, 0));
  // console.log(Math.max(...score)); 
})