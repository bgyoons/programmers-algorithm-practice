function solution(elements) {
    var answer = elements.slice()
    let result = elements.slice()
    
    for (let i = 1; i < elements.length; i++) {
        result = result.map((item, index) =>i + index >= elements.length ? item + elements[i + index - elements.length] : item + elements[index + i])
        answer.push(...result)
    }
    return [...new Set(answer)].length;
}
