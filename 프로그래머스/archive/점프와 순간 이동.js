function solution(n) {
    var ans = 0;
    let num = n
    
    while (num > 0) {
        if (num % 2 === 1) {
            num--
            ans++
        }
        num /= 2
    }
    return ans;
}
