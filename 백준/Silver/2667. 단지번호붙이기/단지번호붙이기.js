const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const answer = [];
const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
const graph = input.map((str) => str.split(""));
const visited = new Array(N).fill().map(() => new Array(N).fill(false));
let count = 0;
const dfs = (cur) => {
  const [row, col] = cur;

  if (visited[row][col]) return;
  visited[row][col] = true;
  count += 1;

  for (const [x, y] of direction) {
    if (!isValid(row + x, col + y) || graph[row + x][col + y] === "0") continue;
    dfs([row + x, col + y]);
  }
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (graph[row][col] === "0" || visited[row][col]) continue;
    dfs([row, col]);
    answer.push(count);
    count = 0;
  }
}
answer.sort((a, b) => a - b);
const length = answer.length;
answer.unshift(length);

console.log(answer.join("\n"));
