const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];
const dp = [BigInt(0), BigInt(1)];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());
