const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const queue = [];
const answer = [];
let start = 0;
let size = 0;
for (let i = 1; i <= +input[0]; i++) {
  const order = input[i];
  const end = queue.length;
  if (order.includes("push")) {
    const X = order.split(" ")[1];
    queue[end] = X;
    size += 1;
  } else if (order === "pop") {
    const result = size ? queue[start] : -1;
    answer.push(result);
    if (size) {
      queue[start] = null;
      start += 1;
      size -= 1;
    }
  } else if (order === "size") {
    answer.push(size);
  } else if (order === "empty") {
    answer.push(size ? 0 : 1);
  } else if (order === "front") {
    const result = size ? queue[start] : -1;
    answer.push(result);
  } else if (order === "back") {
    const result = size ? queue[end - 1] : -1;
    answer.push(result);
  }
}
console.log(answer.join("\n"));
