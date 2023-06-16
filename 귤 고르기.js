function solution(k, tangerine) {
  var answer = 0;
  if (k === 1) return 1;

  const countObj = tangerine.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] += 1;
    else acc[cur] = 1;
    return acc;
  }, {});
  const count = Object.values(countObj).sort((a, b) => b - a);

  for (let num of count) {
    answer += 1;
    k = k - num;
    if (k <= 0) break;
  }
  return answer;
}