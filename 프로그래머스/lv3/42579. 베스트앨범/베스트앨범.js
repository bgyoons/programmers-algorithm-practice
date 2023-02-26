function solution(genres, plays) {
    var answer = [];
    let musicInfo = []; // 음악 정보
    let genresCount = {} // 장르별 재생수
    let genresPlayRank = [...new Set(genres)]; // 장르 재생수 순위
    
    // 장르 재생 랭킹
    genres.forEach((ele, idx) => {
        if (genresCount[ele]) {
            genresCount[ele] += plays[idx]
        } else genresCount[ele] = plays[idx]
    })
    
    genresPlayRank = genresPlayRank.map((ele, idx) => [ele, genresCount[ele]])
                        .sort((a, b) => b[1] - a[1])
                        .map(ele => ele[0])
    
    // 음악 정보
    genres.forEach((ele, idx) => {
        let obj = {}
        obj.genre = ele;
        obj.count = plays[idx]
        obj.index = idx
        musicInfo.push(obj)
    })
    
    musicInfo.sort((a, b) => {
        if (b.count === a.count && b.genre === a.genre) {
            return a.index - b.index
        } else return b.count - a.count
    })
    
    genresPlayRank.forEach(ele => {
        let count = 0;
        for (let info of musicInfo) {
            if (count === 2) {
              continue;  
            } else if (info.genre === ele) {
                answer.push(info.index)
                count += 1
            }
        }
    })
    
    return answer;
}
