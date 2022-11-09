function solution(number) {
    var answer = 0;
    
    let makeCombination = (arr, num) => {
        let output = []
        if (num === 1) return arr.map(ele => [ele])
        
        arr.forEach((ele, idx) => {
            let fixed = ele;
            let restArr = arr.slice(idx + 1)
            let restCombi = makeCombination(restArr, num - 1)
            let combination = restCombi.map(ele => [fixed, ...ele])
            output.push(...combination)
        })
        return output
    }
    
    for (let arr of makeCombination(number, 3)) {
        if (arr.reduce((acc, cur) => acc += cur) === 0) answer++
    }
    
    return answer;
}
