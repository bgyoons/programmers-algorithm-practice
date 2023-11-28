function solution(s) {
    let count = 0
    let zero = 0

    const makeAnswer = (string) => {
        if (string === "1") return [count, zero];

        let onlyOne = string.replace(/0/g, '')
        let result = onlyOne.length.toString(2)
        
        zero += (string.length - onlyOne.length);
        count++
        
        return makeAnswer(result)
    }
    
    return makeAnswer(s)
}
