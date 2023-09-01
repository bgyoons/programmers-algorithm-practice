// 작은 노드

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let M, K;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 1) [_, M, K] = input[0];
  if (input.length === M + 1) {
    input.shift();
    rl.close();
  }
});

rl.on('close', () => {
  let graph = {};
  input.forEach(([s, e]) => {
    if (graph[s]) graph[s].push(e);
    else graph[s] = [e];
    if (graph[e]) graph[e].push(s);
    else graph[e] = [s];
  })

  for (let i in graph) {
    graph[i].sort((a, b) => a - b);
  }

  let count = 1;
  let cur = K;
  let next = K;

  while (next) {
    if (graph[cur]) {
      for (let i of graph[cur]) {
        if (graph[i]) {
          delete graph[cur];
          cur = i;
          next = cur;
          count += 1;
          break;
        } else next = 0;
      }
    } else break;
  }

  console.log(count, cur);
})