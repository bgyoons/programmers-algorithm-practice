const fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [number, , ...pairs] = input;
const graph = pairs.reduce((acc, cur) => {
  const [from, to] = cur.split(" ");
  !acc[from] ? (acc[from] = [to]) : acc[from].push(to);
  !acc[to] ? (acc[to] = [from]) : acc[to].push(from);
  return acc;
}, {});

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
