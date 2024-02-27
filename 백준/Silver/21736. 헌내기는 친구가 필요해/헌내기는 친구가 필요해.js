const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((row) => row.split(""));

let start;
for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (graph[row][col] === "I") {
      start = [row, col];
      break;
    }
  }
}

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < M;
const visited = new Array(N).fill().map(() => new Array(M).fill(false));
let answer = 0;
const dfs = (cur) => {
  const [row, col] = cur;

  if (visited[row][col]) return;
  visited[row][col] = true;

  if (graph[row][col] === "P") answer += 1;

  for (const [x, y] of direction) {
    if (!isValid(row + x, col + y) || graph[row + x][col + y] === "X") {
      continue;
    }
    dfs([row + x, col + y]);
  }
};

dfs(start);

if (answer) console.log(answer);
else console.log("TT");