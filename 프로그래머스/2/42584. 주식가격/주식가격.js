function solution(prices) {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        const cur = prices[i];
        let count = 0;
        for (let j = i + 1; j < prices.length; j++) {
            const next = prices[j];
            count += 1;
            if (cur > next) break;
        }
        answer.push(count)
    }
    return answer;
}