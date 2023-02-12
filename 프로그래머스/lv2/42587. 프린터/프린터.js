function solution(priorities, location) {
    var answer = 0;
    let index = location;
    
    while (priorities.length) {
        let max = Math.max(...priorities);
        let [now] = priorities.splice(0, 1);
        
        if (max > now) priorities.push(now)
        else if (max === now) {
            answer += 1;
            if (index === 0 && answer > 0) return answer;
        }
        index -= 1;
        if (index < 0) index += priorities.length;
    }
    
    return answer;
}