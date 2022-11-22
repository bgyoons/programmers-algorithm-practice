function solution(maps) {
    var answer = 0;
    let [row, col] = [0, 0]
    let visit = maps.slice()
    visit[row][col] = 0
    let change = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    let queue = []
    
    const canMove = (row, col) => !(row < 0 || row >= maps.length || col < 0 || col >= maps[0].length || maps[row][col] === 0 || visit[row][col] === 0)

    while (!(row === maps.length - 1 && col === maps[0].length - 1)) {
        for (let [x, y] of change) {
            if (canMove(row + x, col + y)) {
                queue.push([row + x, col + y, answer + 1])
                visit[row + x][col + y] = 0
            }
        }
        if (queue.length > 0) [row, col, answer] = queue.shift()    
        else return -1
    }
    
    return answer + 1;
}
