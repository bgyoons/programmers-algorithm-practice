function solution(n, k) {
    var answer = 0;
    let prime = '';
    let quo = n;
    
    while (quo >= k) {
        const re = quo % k;
        prime = re + prime;
        quo = parseInt(quo / k);
    }
    
    prime = quo + prime;
    prime.split('0').forEach(ele => {
        if (checkPrime(+ele)) answer += 1;
    })

    return answer;
}

const checkPrime = (num) => {
    if (num === 2) return true;
    else if (num < 2 || !(num % 2)) return false;
    
    for (let i = 3; i < Math.sqrt(num) + 1; i += 2) {
        if (!(num % i)) return false;
    }
    
    return true;
}