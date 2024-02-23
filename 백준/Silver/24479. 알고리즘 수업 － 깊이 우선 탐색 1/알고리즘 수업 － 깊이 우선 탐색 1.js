const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);

const graph = new Array(N + 1).fill().map(() => new Array());
for (const pair of input) {
  const [u, v] = pair.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
graph.forEach((pair) => pair.sort((a, b) => a - b));

const order = [];
const visited = new Array(N + 1).fill(false);
const dfs = (start) => {
  if (visited[start]) return;
  visited[start] = true;
  order.push(start);

  for (const vertex of graph[start]) {
    if (visited[vertex]) continue;
    dfs(vertex);
  }
};

dfs(R);
const answer = new Array(N).fill(0);
order.forEach((vertex, index) => {
  answer[vertex - 1] = index + 1;
});
console.log(answer.join("\n"));
