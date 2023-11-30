let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const operator = ["+", "-", "/", "*"];
const calculator = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "/": (x, y) => x / y,
  "*": (x, y) => x * y,
};
const [n, ex, ...numbers] = input;
const alphabet = Array(+n)
  .fill()
  .map((v, i) => String.fromCharCode(i + 65));
const expression = ex.split("");
const number = numbers.map(Number);
const stack = [];

expression.forEach((ele) => {
  let value;
  if (operator.includes(ele)) {
    const second = stack.pop();
    const first = stack.pop();
    value = calculator[ele](first, second);
  } else value = number[alphabet.indexOf(ele)];
  stack.push(value);
});

const answer = stack[0].toFixed(2);
console.log(answer);
