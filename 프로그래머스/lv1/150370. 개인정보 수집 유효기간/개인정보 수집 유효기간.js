function solution(today, terms, privacies) {
    var answer = [];
    const [year, month, day] = dateFormat(today);
    
    for (let i = 0; i < privacies.length; i++) {
        const [pDate, pTerm] = privacies[i].split(" ");
        let [pYear, pMonth, pDay] = dateFormat(pDate);
        const [term, period] = terms.find(ele => ele.includes(pTerm)).split(" ").map(ele => +ele);
        
        if (pMonth + period > 12) {
            const quo = Math.floor((pMonth + period) / 12);
            if ((pMonth + period) % 12 === 0) {
                pYear += quo - 1;
                pMonth = 12;
            } else {
                pYear += quo;
                pMonth += period - (12 * quo);
            }
        } else pMonth += period;
        
        if (year > pYear) answer.push(i + 1);
        else if (year === pYear) {
            if (month > pMonth) answer.push(i + 1);
            else if (month === pMonth && day > pDay - 1) answer.push(i + 1);
        }
    }
    
    return answer;
}

const dateFormat = (date) => date.split(".").map(ele => +ele);