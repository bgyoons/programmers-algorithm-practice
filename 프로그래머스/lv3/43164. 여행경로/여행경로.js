function solution(tickets) {
    var answer = [];
    const destination = {};
    tickets.forEach(([departure, arrival])=> {
        if (destination[departure]) destination[departure].push(arrival);
        else destination[departure] = [arrival];
    });
    Object.values(destination).forEach(arr => arr.sort());
    
    let stack = ["ICN"];
    while (stack.length) {
        let cur = stack[stack.length - 1];
        console.log(cur, answer, stack, destination)
        if (!destination[cur] || !destination[cur].length) {
            answer.push(stack.pop());
            continue;
        } 
        stack.push(destination[cur][0]);
        destination[cur].shift();            
    }

    return answer.reverse();
}