const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); // dev/stdin

const length = +input[0];
const balloon = input[1].split(" ").map(Number);
let answer = "1";
let curIdx = 0;

for (let i = 1; i < length; i++) {
  const int = balloon[curIdx];
  let count = 0;
  balloon[curIdx] = null;

  while (count < Math.abs(int)) {
    if (int > 0) {
      if (curIdx + 1 === length) curIdx = 0;
      else curIdx += 1;
    } else {
      if (!curIdx) curIdx = length - 1;
      else curIdx -= 1;
    }
    if (balloon[curIdx]) count += 1;
    if (count === Math.abs(int)) answer += " " + (curIdx + 1);
  }
}
console.log(answer);
