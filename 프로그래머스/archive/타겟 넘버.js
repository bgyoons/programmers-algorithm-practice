function solution(numbers, target) {
    var answer = 0;
    
    const DFS = (lv, sum) => {
        if (lv === numbers.length) {
            if (sum === target) answer += 1;
        } else {
            DFS(lv + 1, sum + numbers[lv])
            DFS(lv + 1, sum - numbers[lv])   
        }
    } 
    DFS(0, 0)
    
    return answer;
}