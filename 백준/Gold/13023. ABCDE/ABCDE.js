const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input.shift().split(" ")[0];
const graph = new Array(N).fill().map(() => new Array());
for (const str of input) {
  const [a, b] = str.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = new Array(N).fill(false);
let answer = 0;
const dfs = (cur, count) => {
  if (visited[cur]) return;
  visited[cur] = true;
  if (answer) return;
  if (count === 5) {
    answer = 1;
    return;
  }

  for (const friend of graph[cur]) {
    if (visited[friend]) continue;
    dfs(friend, count + 1);
  }
  visited[cur] = false;
};

for (let i = 0; i < N; i++) {
  if (answer) break;
  dfs(i, 1);
}

console.log(answer);
