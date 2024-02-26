const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const isValid = (i, j) => i >= 0 && i < 5 && j >= 0 && j < 5;
const graph = input.map((ele) => ele.split(" "));
const answer = [];
const dfs = (start, number) => {
  if (number.length === 6) {
    if (!answer.includes(number)) answer.push(number);
    return;
  }

  const [i, j] = start;
  number += graph[i][j];

  for (const [x, y] of direction) {
    if (!isValid(i + x, j + y)) continue;
    dfs([i + x, j + y], number);
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let number = "";
    dfs([i, j], number);
  }
}
console.log(answer.length);