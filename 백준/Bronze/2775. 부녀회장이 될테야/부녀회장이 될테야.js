const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const testCase = +input.shift();
const memo = {};

const dp = (k, n) => {
  if (memo[k] && memo[k][n]) return memo[k][n];

  if (!memo[k]) memo[k] = new Array(n + 1).fill();

  if (k === 0) {
    memo[k][n] = n;
    return n;
  }

  let ho = n;
  let sum = dp(k - 1, n);

  while (ho > 0) {
    sum += dp(k - 1, ho - 1);
    ho -= 1;
  }
  memo[k][n] = sum;
  return sum;
};

const answer = [];

for (let i = 0; i < testCase; i++) {
  const k = +input[2 * i];
  const n = +input[2 * i + 1];
  const sum = dp(k, n);

  answer.push(sum);
}

console.log(answer.join("\n"));