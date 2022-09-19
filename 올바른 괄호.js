function solution(s){
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') answer++
        else {
            if (answer > 0) answer--
            else return false
        }
    }

    return answer === 0;
}
