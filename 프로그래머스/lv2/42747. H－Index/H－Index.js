function solution(citations) {
    let hIndex = citations
        .map((ele, index) => citations.filter(item => item >= ele).length)
        .map((ele, index) => ele < citations[index] ? ele : citations[index])

    return Math.max(...hIndex);
}