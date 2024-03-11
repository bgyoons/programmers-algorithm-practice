const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [A, B] = input.map((str) => str.split(""));
let str = "";
for (let i = 0; i < 8; i++) {
  str += A[i] + B[i];
}

const memo = {};
while (str.length > 2) {
  let newStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    const value = str[i] + str[i + 1];
    if (!memo[value]) {
      const sum = +str[i] + +str[i + 1];
      memo[value] = (sum % 10).toString();
    }
    newStr += memo[value];
  }
  str = newStr;
}

console.log(str);