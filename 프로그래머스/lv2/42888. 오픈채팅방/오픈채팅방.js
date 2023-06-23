function solution(record) {
    var answer = [];
    const users = record.reduce((acc, cur) => {
        const [info, uid, name] = cur.split(' ');
        if (info !== 'Leave' && (!acc[uid] || acc[uid] && acc[uid] !== name)) acc[uid] = name;
        return acc;
    }, {});
    
    record.forEach(ele => {
        const [info, uid, name] = ele.split(' ');
        let str = '';
        
        if (info === 'Enter') str = `${users[uid]}님이 들어왔습니다.`;
        else if (info === 'Leave') str = `${users[uid]}님이 나갔습니다.`;
        
        if (str) answer.push(str);
    })
    
    return answer;
}