function solution(n, computers) {
    var answer = 0;
    let visited = Array(3).fill(false);
    
    const DFS = (node, visited) => {
        let stack = [node];
        while (stack.length) {
            let cur = stack.pop();
            visited[cur] = true;
            for (let i = 0; i < n; i++) {
                if (!visited[i] && computers[cur][i]) {
                    stack.push(i);
                }
            }   
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(i, visited);
            answer += 1;
        }
    }
    
    return answer;
}