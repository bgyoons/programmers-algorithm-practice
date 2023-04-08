function solution(k, dungeons) {
    let max = 0;
    
    let arr = makePermutation(dungeons, dungeons.length);
    
    for (let dungeon of arr) {
        let answer = 0;
        let life = k
        
        for (let i = 0; i < dungeon.length; i++) {
            if (life < dungeon[i][0] || life - dungeon[i][1] < 0) break;
            
            life -= dungeon[i][1]
            answer += 1
        }
        
        if (answer > max) {
            max = answer
        }
    }
    
    return max;
}

const makePermutation = (arr, num) => {
    let result = [];

    if (num === 1) return arr.map(ele => [ele]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
        const permutations = makePermutation(rest, num - 1);
        const attached = permutations.map(ele => [fixed].concat(ele));
        result.push(...attached);
    });

    return result;
}