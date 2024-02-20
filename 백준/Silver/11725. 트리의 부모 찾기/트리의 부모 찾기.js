const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const tree = new Array(N + 1).fill().map(() => new Array());

for (const str of input) {
  const [x, y] = str.split(" ").map(Number);
  tree[x].push(y);
  tree[y].push(x);
}

const parent = new Array(N + 1).fill(0);
const visited = new Array(N + 1).fill(false);
const stack = [];
const dfs = () => {
  const cur = stack.shift();

  if (visited[cur]) return;
  visited[cur] = true;

  for (const child of tree[cur]) {
    if (visited[child]) continue;
    parent[child] = cur;
    stack.push(child);
    dfs();
  }
};

for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  stack.push(i);
  dfs();
}

const answer = parent.filter((ele) => ele);
console.log(answer.join("\n"));
