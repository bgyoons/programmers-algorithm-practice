const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const stack = [];
const answer = [];
for (let i = 1; i <= +input[0]; i++) {
  const order = input[i];
  const length = stack.length;

  if (order.includes("push")) {
    const X = order.split(" ")[1];
    stack[length] = X;
  } else if (order === "pop") {
    const result = length ? stack.pop() : -1;
    answer.push(result);
  } else if (order === "size") {
    answer.push(length);
  } else if (order === "empty") {
    answer.push(+!!!length);
  } else if (order === "top") {
    const result = stack[length - 1] ?? -1;
    answer.push(result);
  }
}
console.log(answer.join('\n'));