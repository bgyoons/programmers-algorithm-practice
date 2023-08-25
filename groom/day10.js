// GameJam

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N;
const direction = {
  'U': [-1, 0],
  'D': [1, 0],
  'L': [0, -1],
  'R': [0, 1]
}

const outBoard = num => {
  if (num === -1) num = N - 1;
  else if (num === N) num = 0;
  return num;
}

const startGame = (gameBoard, position, count, board) => {
  let [x, y] = position;
  let score = count;

  while (!gameBoard[x][y]) {
    const coordinate = board[x][y];
    const distance = parseInt(coordinate);
    const command = coordinate[coordinate.length - 1];

    for (let i = 0; i < distance; i++) {
      const [row, col] = direction[command];
      gameBoard[x][y] = 1;
      x += row;
      y += col;
      x = outBoard(x);
      y = outBoard(y);

      if (gameBoard[x][y]) break;
      else score += 1;
    }
  }
  return score;
}

rl.on('line', (line) => {
  input.push(line.split(' '));
  if (input.length === 1) N = +input[0];
  if (input.length === N + 3) rl.close();
});

rl.on('close', () => {
  const board = input.slice(3);

  let goormBoard = new Array(N).fill('').map(e => new Array(N).fill(0));
  let goormPosition = input[1].map(e => e - 1);

  let playerBoard = new Array(N).fill('').map(e => new Array(N).fill(0));
  let playerPosition = input[2].map(e => e - 1);

  let winner;

  const goormScore = startGame(goormBoard, goormPosition, 1, board);
  const playerScore = startGame(playerBoard, playerPosition, 1, board);

  if (goormScore > playerScore) winner = 'goorm';
  else winner = 'player';

  console.log(`${winner} ${winner === 'goorm' ? goormScore : playerScore}`);
})