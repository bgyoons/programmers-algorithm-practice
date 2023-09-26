function solution(n, edge) {
    var answer = 0;
    let graph = {};
    edge.forEach(([x, y]) => {
        if (graph[x]) graph[x].push(y);
        else graph[x] = [y];
        if (graph[y]) graph[y].push(x);
        else graph[y] = [x];
    })
    
    let distance = { '1': 1 };
    let count = 0;
    let queue = [1];
    
    while (queue.length) {
        let cur = queue.shift();
        for (let i = 0; i < graph[cur].length; i++) {
            let node = graph[cur][i];
            if (!distance[node]) {
                distance[node] = distance[cur] + 1;
                queue.push(node);
            }
        }
    }
    
    const maxDistance = Math.max(...Object.values(distance));
    for (let node in distance) {
        if (distance[node] === maxDistance) answer += 1;
    }
    
    return answer;
}