function solution(numbers, target) {
  let answer = 0;
  const N = numbers.length;
  const dfs = (level, sum) => {
    if (level === N) {
      if (sum === target) answer += 1;
      return;
    }
    const number = numbers[level];
    dfs(level + 1, sum + number);
    dfs(level + 1, sum - number);
  };
  dfs(0, 0);
  return answer;
}
