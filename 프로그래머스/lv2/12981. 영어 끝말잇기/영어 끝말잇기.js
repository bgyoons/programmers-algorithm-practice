function solution(n, words) {
    var answer = [0, 0]
    let stack = [words[0]]
    
    for (let i = 1; i < words.length; i++) {
        if (!stack.includes(words[i]) && words[i - 1][words[i - 1].length - 1] === words[i][0]) {
            stack.push(words[i])
        } else {
            answer = [(i + 1) % n || n, Math.ceil((i + 1) / n)]
            return answer
        }
    }

    return answer;
}