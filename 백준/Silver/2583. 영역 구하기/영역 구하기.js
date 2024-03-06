const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const graph = new Array(M).fill().map(() => new Array(N).fill(1));

for (const rec of input) {
  const [x1, y1, x2, y2] = rec.split(" ").map(Number);
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      graph[y][x] = 0;
    }
  }
}

const answer = [];
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;
const visited = new Array(M).fill().map(() => new Array(N).fill(false));
let count = 0;
const dfs = (cur) => {
  const [row, col] = cur;
  if (visited[row][col]) return;
  visited[row][col] = true;
  count += 1;

  for (const [x, y] of direction) {
    if (!isValid(row + x, col + y) || !graph[row + x][col + y]) continue;
    dfs([row + x, col + y]);
  }
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!graph[i][j] || visited[i][j]) continue;
    dfs([i, j]);
    answer.push(count);
    count = 0;
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(" "));
