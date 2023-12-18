const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((value) => +value));

const [N, M] = info;
const graph = new Array(N + 1).fill().map(() => new Array());

for (let i = 0; i < M; i++) {
  const [to, from] = input[i];
  graph[from].push(to);
}

let max = 0;
let answer = [];

const DFS = (n) => {
  const stack = [n];
  const visited = new Array(N + 1).fill(false);
  let count = 1;

  while (stack.length) {
    const value = stack.pop();
    visited[value] = true;
    for (let i = 0; i < graph[value].length; i++) {
      if (!visited[graph[value][i]]) {
        count += 1;
        visited[graph[value][i]] = true;
        stack.push(graph[value][i]);
      }
    }
  }

  if (max > count) return;
  else if (max === count) answer.push(n);
  else {
    max = count;
    answer = [n];
  }
};

for (let i = 1; i <= N; i++) {
  DFS(i);
}
console.log(answer.join(" "));
