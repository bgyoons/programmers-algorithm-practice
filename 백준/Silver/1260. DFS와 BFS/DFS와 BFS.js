const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const answerDFS = [];
const answerBFS = [];

const [info, ...rest] = input;
const [n, v, start] = info.split(" ").map(Number);
const visited = new Array(n + 1).fill(false);
const graph = new Array(n + 1).fill().map(() => new Array());
rest.forEach((pair) => {
  const [from, to] = pair.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
graph.forEach((arr) => arr.sort((a, b) => a - b));

// DFS
const stack = [...graph[start]];
const dfs = (node, arr, visited) => {
  answerDFS.push(node);
  visited[node] = true;
  if (!arr.length) return;

  for (const cur of arr) {
    if (!visited[cur]) dfs(cur, [...graph[cur]], visited);
  }
};
dfs(start, stack, new Array(n + 1).fill(false));

// BFS
const queue = [start];
while (queue.length) {
  const cur = queue.shift();
  if (visited[cur]) continue;
  visited[cur] = true;
  answerBFS.push(cur);
  for (const node of graph[cur]) {
    if (!visited[node]) queue.push(node);
  }
}

console.log(answerDFS.join(" "));
console.log(answerBFS.join(" "));
