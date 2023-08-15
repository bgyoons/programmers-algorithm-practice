// 프로젝트 매니징

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result;

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2 + parseInt(input[0])) {
    calcTime(input);
    rl.close();
  }
});

const calcTime = (input) => {
  const [_, time, ...rest] = input;
  const [hour, min] = time.split(' ').map(str => parseInt(str));
  const totalMin = rest.reduce((acc, cur) => acc += parseInt(cur), 0);

  if (totalMin + min >= 60) {
    const restMin = (totalMin + min) % 60;
    const additionalHour = Math.floor((totalMin + min) / 60);

    if (hour + additionalHour > 23) {
      const restHour = (hour + additionalHour) % 24;
      result = `${restHour} ${restMin}`
    } else result = `${hour + additionalHour} ${restMin}`;
  } else result = `${hour} ${min + totalMin}`;
}

rl.on('close', () => {
  console.log(result);
})