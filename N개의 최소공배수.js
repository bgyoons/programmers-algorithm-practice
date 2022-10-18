function solution(arr) {
    let answer = arr[0]
    let element = arr.slice(1)
        
    while (element.length > 0) {
        let num = element[0]
        let makeDivisor = (n) => {
            let output = []
            for (let i = n; i > 0; i--) if (n % i === 0) output.push(i)
            return output
        }
        let divisor = makeDivisor(Math.min(answer, num))
        let gcd = divisor.find(item => Math.max(answer, num) % item === 0)
        answer = answer * num / gcd
        element.splice(0, 1)
    }
    
    return answer;
}
