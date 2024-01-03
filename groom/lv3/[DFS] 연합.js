const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N, M;
rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
  if (input[0][1] === input.length - 1) {
    [N, M] = input.shift();
    rl.close();
  }
});

rl.on("close", () => {
  const graph = new Array(N + 1).fill().map(() => new Array());
  const connected = new Array(N + 1)
    .fill()
    .map(() => new Array(N + 1).fill(false));
  for (const [s, e] of input) {
    graph[s].push(e);
    connected[s][e] = true;
  }
  let answer = 0;
  const visited = new Array(N + 1).fill(false);
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue; // 중요
    const stack = [i];
    while (stack.length) {
      const cur = stack.shift();
      visited[cur] = true;
      for (const next of graph[cur]) {
        if (visited[next] || !connected[next][cur]) continue;
        stack.push(next);
      }
    }
    answer += 1;
  }
  console.log(answer);
});
