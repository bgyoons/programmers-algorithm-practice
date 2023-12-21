// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];
  for await (const line of rl) {
    input.push(line);
    rl.close();
  }
  const [N, _, ...rest] = input;
  const pairs = rest.map((ele) => ele.split(" ").map(Number));
  const graph = new Array(+N + 1).fill().map(() => new Array());
  for (const [u, v] of pairs) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const visited = new Array(+N + 1).fill(false);

  let answer = 1;
  const dfs = (lv) => {
    if (visited[lv]) return;
    visited[lv] = true;
    for (const friend of graph[lv]) {
      if (visited[friend]) continue;
      answer += 1;
      dfs(friend);
    }
  };

  dfs(1);
  console.log(answer);
  process.exit();
})();
