const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input;
if (N % 2) console.log("SK");
else console.log("CY");
