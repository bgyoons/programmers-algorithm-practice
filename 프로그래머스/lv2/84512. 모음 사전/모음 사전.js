function solution(word) {
    var answer = 0;
    
    let alphabets = ['A', 'E', 'I', 'O', 'U'];
    let dictionary = new Set()
    
    for (let i = 1; i < 6; i++) {
        let output = makeWord(alphabets, i).map(ele => ele.join(''))
        dictionary.add(output)
    }
    let newArr = Array.from(dictionary).flat().sort()
    
    return newArr.indexOf(word) + 1;
}

const makeWord = (arr, num) => {
    let result = [];
    if (num === 1) return arr.map(ele => [ele]);
    
    arr.forEach((ele, idx) => {
        let fixed = ele;
        let permutations = makeWord(arr, num - 1)
        let sum = permutations.map(ele => [fixed].concat(ele))
        result.push(...sum)
    })
    return result
}