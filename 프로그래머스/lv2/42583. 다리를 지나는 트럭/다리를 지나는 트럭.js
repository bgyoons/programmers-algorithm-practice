function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0)
    let sum = truck_weights.shift()
    bridge.shift()
    bridge.push(sum)
    var answer = 1;
    
    while (sum > 0) {
        let truck = truck_weights[0]
        sum -= bridge.shift()
        
        if (sum + truck <= weight) {
            bridge.push(truck)
            sum += truck
            truck_weights.shift()
        } else bridge.push(0)            

        answer++
    }
    
    return answer;
}