function solution(fees, records) {
    var answer = [];
    let carSorted = [];
    let parkingTotalTime = {};
    
    records.forEach(record => {
        const carNum = record.split(' ')[1];
        if (!carSorted.includes(carNum)) carSorted.push(carNum);
    });
    
    carSorted.sort().map(carNum => {
        let info = {};
        info[carNum] = 0;
        return info;
    })
    
    records.forEach((rcd, idx, arr) => {
        const [iTime, iNum, iInfo] = rcd.split(' ');
        const [iHour, iMin] = iTime.split(':')
        
        if (iInfo === 'IN') {
            const outRecord = arr.find((e, i) => e.includes(iNum) && e.includes('OUT') && idx < i);
            let oTime, oHour, oMin;
            
            if (outRecord) {
                oTime = outRecord.split(' ')[0];
                [oHour, oMin] = oTime.split(':');
            } else [oHour, oMin] = ['23', '59'];

            const [hour, min] = [oHour - iHour, oMin - iMin];
            
            if (parkingTotalTime[iNum]) parkingTotalTime[iNum] += hour * 60 + min;
            else parkingTotalTime[iNum] = hour * 60 + min;
        }
    });
    
    for (let carNum of carSorted) {
        const [minTime, minFee, overTime, overFee] = fees;
        let totalTime = parkingTotalTime[carNum];
        let fee = 0;
        
        if (totalTime - minTime <= 0) fee = minFee;
        else fee = minFee + Math.ceil((totalTime - minTime) / overTime) * overFee;
        
        answer.push(fee);
    }
    
    return answer;
}