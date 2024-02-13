const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [computerCount, connectCount] = input.slice(0, 2).map(Number);
const graph = new Array(computerCount + 1).fill().map(() => new Array());
for (const connect of input.slice(2)) {
  const [x, y] = connect.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(computerCount + 1).fill(false);
visited[1] = true;
const stack = [1];
let answer = -1;

const dfs = () => {
  if (!stack.length) return;
  answer += 1;
  const cur = stack.shift();
  for (const computer of graph[cur]) {
    if (visited[computer]) continue;
    stack.push(computer);
    visited[computer] = true;
  }
  dfs();
};
dfs();

console.log(answer);
