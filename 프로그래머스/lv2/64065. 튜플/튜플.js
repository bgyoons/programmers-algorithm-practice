function solution(s) {
    var answer = [];
    const elements = s.split('}').map(str => str.replaceAll(/[{]/g, '')).sort((a, b) => a.length - b.length);
    elements.forEach(element => {
        if (element.length) {
            element.split(',').forEach(ele => {
                if (+ele > 0 && !answer.includes(+ele)) answer.push(+ele);
            })
        }
    })
    return answer;
}