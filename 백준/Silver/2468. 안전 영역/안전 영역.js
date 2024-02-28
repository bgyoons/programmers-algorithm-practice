const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((ele) => ele.split(" ").map(Number));
let maxHeight = -1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] > maxHeight) maxHeight = graph[i][j];
  }
}

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
let answer = 0;
const dfs = (cur, visited, height) => {
  const [row, col] = cur;

  if (visited[row][col]) return;
  visited[row][col] = true;

  for (const [x, y] of direction) {
    if (!isValid(row + x, col + y) || graph[row][col] <= height) continue;
    dfs([row + x, col + y], visited, height);
  }
};

for (let height = 0; height < maxHeight; height++) {
  const visited = new Array(N).fill().map(() => new Array(N).fill(false));
  let count = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (graph[row][col] <= height || visited[row][col]) continue;
      dfs([row, col], visited, height);
      count += 1;
    }
  }
  if (answer < count) answer = count;
}
console.log(answer);
