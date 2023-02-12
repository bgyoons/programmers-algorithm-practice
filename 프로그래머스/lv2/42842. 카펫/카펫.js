function solution(brown, yellow) {
    var answer = [];
    let middle = []
    
    for (let i = yellow; i >= Math.sqrt(yellow); i--) {
        if (yellow % i === 0 && i >= yellow / i) {
            middle = [i, yellow / i]
        }
        
        let [first, second] = middle
        let output = (first + 2) * 2 + second * 2
        
        if (output === brown) {
            answer = [first + 2, second + 2]
        }
    }
    
    return answer;
}