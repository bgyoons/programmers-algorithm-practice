// 발전기(2)

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const direction = {
  'up': [-1, 0],
  'down': [1, 0],
  'left': [0, -1],
  'right': [0, 1]
};
let input = [];
let N, K;
let town = {};

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 1) [N, K] = input[0];
  if (input.length === N + 1) {
    input.shift();
    rl.close();
  }
});

rl.on('close', () => {
  let visited = Array(N).fill('').map(_ => Array(N).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const cur = input[i][j];
        let stack = [];
        let count = 1;
        stack.push([i, j]);

        while (stack.length) {
          const [x, y] = stack.pop();
          visited[x][y] = true;

          for (let d in direction) {
            const nextX = x + direction[d][0];
            const nextY = y + direction[d][1];

            if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
              if (!visited[nextX][nextY] && input[nextX][nextY] === cur) {
                stack.push([nextX, nextY]);
                visited[nextX][nextY] = true;
                count += 1;
              }
            }
          }
        }
        if (count >= K) town[cur] = (town[cur] || 0) + 1;
      }
    }
  }

  let max = 0;
  let type = 0;

  for (let t in town) {
    const count = town[t];
    if (count > max) {
      max = count;
      type = t;
    } else if (count === max) {
      if (type < +t) type = +t;
    }
  }

  console.log(type);
})