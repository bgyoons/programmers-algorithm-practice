function solution(cacheSize, cities) {
  const lowerCities = cities.map(ele => ele.toLowerCase());
  var answer = 0;
  let cache = [];

  for (let city of lowerCities) {
    const index = cache.indexOf(city);
    if (index > -1) {
      answer += 1;
      cache.splice(index, 1);
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    }
    if (cache.length < cacheSize) cache.push(city);
  }

  return answer;
}