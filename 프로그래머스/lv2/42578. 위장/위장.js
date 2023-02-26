function solution(clothes) {
    var answer = 0;
    
    let clothesCount = {}
    
    clothes.forEach((ele, idx) => {
        if (clothesCount[ele[1]]) {
            clothesCount[ele[1]] = clothesCount[ele[1]] + 1
        } else {
            clothesCount[ele[1]] = 1
        }
    })
    
    answer = Object.values(clothesCount).reduce((acc, cur) => {
        acc = acc * (cur + 1)
        return acc;
    }, 1)
    
    return answer - 1;
}