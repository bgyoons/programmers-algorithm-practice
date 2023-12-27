const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N;
rl.on("line", (line) => {
  input.push(line);
  if (input.length > +input[0]) {
    N = +input[0];
    rl.close();
  }
});

const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

rl.on("close", () => {
  const country = input.slice(1).map((str) => str.split(" ").map(Number));
  const visited = new Array(N).fill().map((_) => new Array(N).fill(false));
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (country[i][j] && !visited[i][j]) {
        visited[i][j] = true;
        const stack = [[i, j]];
        while (stack.length) {
          const [row, col] = stack.shift();
          for (const [x, y] of direction) {
            if (
              isValid(row + x, col + y) &&
              country[row + x][col + y] &&
              !visited[row + x][col + y]
            ) {
              visited[row + x][col + y] = true;
              stack.push([row + x, col + y]);
            }
          }
        }
        answer += 1;
      }
    }
  }
  console.log(answer);
});
