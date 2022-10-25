function solution(n, left, right) {
    let answer = []
    
    for (let i = left; i <= right; i++) {
        i % n <= parseInt(i / n) ? answer.push(parseInt(i / n) + 1) : answer.push(i % n + 1)
    }

    return answer
}
