function solution(nums) {
    var answer = 0;
    
    if (new Set(nums).size > nums.length / 2) {
        answer = nums.length / 2
    } else {
        answer = new Set(nums).size
    }
    
    return answer;
}