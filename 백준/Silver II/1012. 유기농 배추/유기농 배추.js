const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const totalCase = +input.shift();
const answer = [];

for (let countCase = 0; countCase < totalCase; countCase++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const graph = new Array(N).fill().map(() => new Array(M).fill(0));

  let number = 0;
  while (number < K) {
    const [row, col] = input.shift().split(" ").map(Number);
    graph[col][row] = 1;
    number += 1;
  }

  const isValid = (row, col) => {
    return row < M && row >= 0 && col < N && col >= 0;
  };
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = new Array(N).fill().map(() => new Array(M).fill(false));
  const stack = [];
  const dfs = () => {
    const [row, col] = stack.shift();
    if (visited[col][row]) return;
    visited[col][row] = true;
    if (!graph[col][row]) return;
    for (const [x, y] of move) {
      if (
        !isValid(row + x, col + y) ||
        visited[col + y][row + x] ||
        !graph[col + y][row + x]
      ) {
        continue;
      }
      stack.push([row + x, col + y]);
      dfs();
    }
  };
  let count = 0;
  for (let col = 0; col < N; col++) {
    for (let row = 0; row < M; row++) {
      if (!graph[col][row] || visited[col][row]) continue;
      stack.push([row, col]);
      dfs();
      count += 1;
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));
