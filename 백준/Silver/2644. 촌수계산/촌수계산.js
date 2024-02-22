const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];
const [a, b] = input[1].split(" ").map(Number);

const tree = new Array(n + 1).fill().map(() => new Array());
for (const pair of input.slice(3)) {
  const [parent, child] = pair.split(" ").map(Number);
  tree[parent].push(child);
  tree[child].push(parent);
}

let answer;
const visited = new Array(n + 1).fill(false);
const dfs = (cur, level) => {
  if (visited[cur]) return;
  visited[cur] = true;

  for (const v of tree[cur]) {
    if (v === b) {
      answer = level;
      isMatched = true;
      return;
    }
    if (visited[v]) continue;
    dfs(v, level + 1);
  }
};

dfs(a, 1);
if (answer) console.log(answer);
else console.log(-1);