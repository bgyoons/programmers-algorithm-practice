// 작은 노드

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M, K;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 1) {
    N = input[0][0];
    M = input[0][1];
    K = input[0][2];
  }
  if (input.length === M + 1) {
    input.shift();
    rl.close();
  }
});

rl.on('close', () => {
  let graph = Array(N).fill('').map(e => Array(N).fill(0));
  input.forEach(([row, col]) => {
    graph[row - 1][col - 1] = 1;
    graph[col - 1][row - 1] = 1;
  })

  let x = K - 1;
  let count = 1;
  let visitedNode = [K - 1];
  let flag = true;

  while (flag) {
    for (let i = 0; i < N; i++) {
      if (!visitedNode.includes(i) && graph[x][i]) {
        visitedNode.push(i);
        count += 1;
        x = i;
      } else if (i === N - 1) {
        flag = false;
        break;
      }
    }
  }

  console.log(count, x + 1);
})