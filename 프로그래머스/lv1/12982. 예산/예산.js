function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    
    while (budget >= 0) {
        console.log(budget, answer, d)
        budget -= d.shift()
        
        if (budget >= 0) answer += 1
    }
    
    return answer;
}