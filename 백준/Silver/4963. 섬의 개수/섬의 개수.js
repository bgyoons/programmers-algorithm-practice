const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const answer = [];
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
const isValid = (row, col, w, h) => row >= 0 && row < w && col >= 0 && col < h;
const dfs = (stack, visited, graph) => {
  const [row, col] = stack.shift();
  if (visited[col][row]) return;
  visited[col][row] = true;

  for (const [x, y] of direction) {
    if (
      !isValid(row + x, col + y, graph[0].length, graph.length) ||
      visited[col + y][row + x] ||
      !graph[col + y][row + x]
    ) {
      continue;
    }
    stack.push([row + x, col + y]);
    dfs(stack, visited, graph);
  }
};

while (input.length) {
  const [w, h] = input.shift().split(" ").map(Number);
  if (!w && !h) break;

  const graph = [];
  for (let i = 0; i < h; i++) {
    const row = input.shift().split(" ").map(Number);
    graph.push(row);
  }

  const stack = [];
  const visited = new Array(h).fill().map(() => new Array(w).fill(false));
  let count = 0;
  for (let col = 0; col < h; col++) {
    for (let row = 0; row < w; row++) {
      if (visited[col][row] || !graph[col][row]) continue;
      stack.push([row, col]);
      dfs(stack, visited, graph);
      count += 1;
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));
