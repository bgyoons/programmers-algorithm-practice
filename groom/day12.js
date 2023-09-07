// 발전기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N;
const direction = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1]
};

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 1) N = input[0][0];
  if (input.length === N + 1) {
    input.shift();
    rl.close();
  }
});

rl.on('close', () => {
  let visited = Array(N).fill('').map(e => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] && !visited[i][j]) {
        let stack = [];
        stack.push([i, j]);
        visited[i][j] = true;

        while (stack.length) {
          let [curI, curJ] = stack.pop();
          for (let d in direction) {
            let nextI = curI + direction[d][0];
            let nextJ = curJ + direction[d][1];

            if (nextI > -1 && nextI < N && nextJ > -1 && nextJ < N) {
              if (input[nextI][nextJ] && !visited[nextI][nextJ]) {
                stack.push([nextI, nextJ]);
                visited[nextI][nextJ] = true;
              }
            }
          }
        }
        count += 1;
      }
    }
  }

  console.log(count);
})