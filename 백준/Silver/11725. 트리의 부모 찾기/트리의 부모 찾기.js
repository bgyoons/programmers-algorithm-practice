const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, ...rest] = input;
const graph = new Array(+N + 1).fill().map(() => new Array());
rest.forEach((pair) => {
  const [from, to] = pair.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
const answer = new Array(+N + 1).fill();
const visited = new Array(+N + 1).fill(false);
const dfs = (lv) => {
  if (visited[lv]) return;
  visited[lv] = true;
  graph[lv].forEach((node) => {
    if (!visited[node]) answer[node] = lv;
    dfs(node);
  });
};

dfs(1);
console.log(answer.slice(2).join("\n"));
