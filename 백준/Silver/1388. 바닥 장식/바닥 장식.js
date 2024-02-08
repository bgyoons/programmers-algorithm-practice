const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const visited = new Array(N).fill().map(() => new Array(M).fill(false));

const floor = input.map((e) => e.split(""));
let answer = 0;
const stack = [];
const dfs = () => {
  const [i, j] = stack.pop();
  const cur = floor[i][j];

  if (
    (cur === "-" && j + 1 < M && cur !== floor[i][j + 1]) ||
    (cur === "|" && i + 1 < N && cur !== floor[i + 1][j]) ||
    (cur === "-" && j === M - 1) ||
    (cur === "|" && i === N - 1)
  ) {
    visited[i][j] = true;
    answer += 1;
    return;
  }

  if (cur === "|" && i + 1 < N && cur === floor[i + 1][j]) {
    visited[i][j] = true;
    stack.push([i + 1, j]);
    dfs();
  }

  if (cur === "-" && j + 1 < M && cur === floor[i][j + 1]) {
    visited[i][j] = true;
    stack.push([i, j + 1]);
    dfs();
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j]) continue;

    stack.push([i, j]);
    dfs();
  }
}

console.log(answer);