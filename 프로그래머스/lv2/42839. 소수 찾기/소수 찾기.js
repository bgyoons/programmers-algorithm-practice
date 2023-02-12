function solution(numbers) {
    var answer = 0;
    let result = [];
    
    const isPrime = (num) => {
        if (num === 2) return true;
        if (num % 2 === 0 || num < 3) return false;
        for (let i = 3; i <= num / 2; i += 2) if (num % i === 0) return false;
        
        return true;
    }

    const permutation = (arr, num) => {
        if (num === 1) return arr;
        
        let output = [];
        arr.forEach((ele, idx) => {
            let fixed = ele;
            let temp = arr.filter((e, i) => idx !== i);
            let rec = permutation(temp, num - 1);
            let sum = rec.map((e, i) => fixed + e);
            output.push(...sum);
        })
        return output;
    } 
    
    for (let i = 1; i <= numbers.length; i++) {
        result.push(...permutation(numbers.split(''), i));
    }
    
    new Set(result.map(e => +e)).forEach(ele => isPrime(ele) ? answer += 1 : answer);
    
    return answer;
}