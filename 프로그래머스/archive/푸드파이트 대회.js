function solution(food) {
    var answer = '';
    let left = ''
    var right = ''
    
    food.forEach((ele, idx) => {
        for (let i = 0; i < Math.floor(ele / 2); i++) {
            left += String(idx)
            right = String(idx) + right
        }
    })
    
    answer = left + '0' + right
    
    return answer;
}
