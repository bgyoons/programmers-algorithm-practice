const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((value) => value.split(""));
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
const rgbVisited = new Array(N).fill().map(() => new Array(N).fill(false));
const rbVisited = new Array(N).fill().map(() => new Array(N).fill(false));

const dfs = (type, position, cur, visited) => {
  const [row, col] = position;

  if (visited[row][col]) return;
  visited[row][col] = true;

  for (const [x, y] of direction) {
    if (
      !isValid(row + x, col + y) ||
      (type === "rgb" && graph[row + x][col + y] !== cur) ||
      (type === "rb" &&
        (((graph[row + x][col + y] === "R" ||
          graph[row + x][col + y] === "G") &&
          cur === "B") ||
          ((cur === "R" || cur === "G") && graph[row + x][col + y] === "B")))
    ) {
      continue;
    }
    dfs(type, [row + x, col + y], cur, visited);
  }
};

let rgbCount = 0;
let rbCount = 0;
for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    const value = graph[row][col];
    if (!rgbVisited[row][col]) {
      dfs("rgb", [row, col], value, rgbVisited);
      rgbCount += 1;
    }
    if (!rbVisited[row][col]) {
      dfs("rb", [row, col], value, rbVisited);
      rbCount += 1;
    }
  }
}
console.log(rgbCount, rbCount);