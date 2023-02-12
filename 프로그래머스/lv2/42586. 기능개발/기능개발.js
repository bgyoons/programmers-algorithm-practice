function solution(progresses, speeds) {
    var answer = [];
    let count = 1;
    let days = progresses.map((ele, index) => Math.ceil((100 - ele) / speeds[index]))
    let fixed = days[0]
    
    while (days.length > 0) {
        days.splice(0, 1)
        
        if (fixed >= days[0]) count++
        else {
            answer.push(count)
            fixed = days[0]
            count = 1
        }
    }
    
    return answer;
}