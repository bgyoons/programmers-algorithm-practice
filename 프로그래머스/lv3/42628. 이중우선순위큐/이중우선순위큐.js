function solution(operations) {
    var answer = [];
    
    operations.forEach((operation) => {
        if (operation.includes('I')) {
            let ele = parseInt(operation.split('I ')[1])
            answer.push(ele)
            answer.sort((a, b) => a - b)
        } else if (operation.includes('D 1')) {
            answer.pop()
        } else if (operation.includes('D -1')) {
            answer.shift()
        }
    })
    return answer.length ? [answer[answer.length - 1], answer[0]] : [0, 0];
}