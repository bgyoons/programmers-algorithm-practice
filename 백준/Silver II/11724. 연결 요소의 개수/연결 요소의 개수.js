const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = new Array(N + 1).fill().map(() => new Array());

for (const pair of input) {
  const [u, v] = pair.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = new Array(N + 1).fill(false);
const dfs = () => {
  const cur = stack.shift();
  if (visited[cur]) return;
  visited[cur] = true;

  for (const next of graph[cur]) {
    if (visited[next]) continue;
    stack.push(next);
    dfs();
  }
};

const stack = [];
let answer = 0;
for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  stack.push(i);
  dfs();
  answer += 1;
}
console.log(answer);
