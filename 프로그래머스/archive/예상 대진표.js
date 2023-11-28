function solution(n,a,b) {
    var answer = 0;
    let arr = []
    for (let i = 0; i < n; i++) { arr.push(i + 1) }
    
    while (arr.length > 2) {
        let aIndex = arr.indexOf(a)
        let bIndex = arr.indexOf(b)
        
        if (Math.floor(aIndex / 2) === Math.floor(bIndex / 2)) return answer + 1

        arr = arr.filter((item, index) => index % 2 === 0)
        if (aIndex % 2 === 1) arr[Math.floor(aIndex / 2)] = a
        if (bIndex % 2 === 1) arr[Math.floor(bIndex / 2)] = b

        answer++
    }
    
    return answer + 1
}
