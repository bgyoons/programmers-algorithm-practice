const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [number, , ...pairs] = input;
const graph = new Array(+number + 1).fill().map(() => new Array());
pairs.forEach((pair) => {
  const [from, to] = pair.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

let answer = 0;
const visited = new Array(+number + 1).fill(false);
const queue = [1];

while (queue.length) {
  const cur = queue.shift();

  if (visited[cur]) continue;

  visited[cur] = true;
  answer += 1;

  for (const computer of graph[cur]) {
    if (!visited[computer]) queue.push(computer);
  }
}
console.log(answer - 1);
