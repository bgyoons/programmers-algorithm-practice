const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input[0];
const memo = [0, 1];

const pibo = (num) => {
  if (num <= 1) return memo[num];
  if (memo[num]) return memo[num];

  const sum = pibo(num - 1) + pibo(num - 2);
  memo[num] = sum;
  return sum;
};

console.log(pibo(N));
