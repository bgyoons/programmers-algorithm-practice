const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N, K, Q;
rl.on("line", (line) => {
  if (!input.length) [N, K, Q] = line.split(" ").map(Number);
  input.push(line);
  if (N + Q + 1 === input.length) {
    input.shift();
    rl.close();
  }
});

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;

rl.on("close", () => {
  const arr = input.slice(0, N).map((ele) => ele.split(""));
  const work = input.slice(N).map((ele) => ele.split(" "));
  for (const [r, c, alp] of work) {
    arr[r - 1][c - 1] = alp;
    const visited = new Array(N).fill().map((_) => new Array(N).fill(false));
    const stack = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[i][j] === "." || visited[i][j]) continue;
        const curValue = arr[i][j];
        const count = [[i, j]];
        stack.push([i, j]);
        visited[i][j] = true;
        while (stack.length) {
          const [row, col] = stack.shift();
          for (const [x, y] of direction) {
            if (
              !isValid(row + x, col + y) ||
              visited[row + x][col + y] ||
              arr[row + x][col + y] !== curValue
            )
              continue;
            count.push([row + x, col + y]);
            stack.push([row + x, col + y]);
            visited[row + x][col + y] = true;
          }
        }
        if (count.length >= K)
          count.forEach(([row, col]) => (arr[row][col] = "."));
      }
    }
  }
  const result = arr.map((ele) => ele.join("")).join("\n");
  console.log(result);
});
