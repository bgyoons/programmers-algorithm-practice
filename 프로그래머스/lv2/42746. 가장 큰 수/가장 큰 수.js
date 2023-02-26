function solution(numbers) {
    var answer = numbers.map(ele => `${ele}`)
    
    answer.sort((a, b) => {
        return (b + a) - (a + b)
    })
    
    if (answer.every(ele => ele === '0')) return '0'
    
    return answer.join('');
}