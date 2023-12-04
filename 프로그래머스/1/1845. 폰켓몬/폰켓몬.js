nums = [3, 3, 3, 2, 2, 4];
let answer = 0;    
let numsCountHalf = 0; 

function solution(nums) {    
    let uniqueSet = new Set(nums);
    let uniqueArray = Array.from(uniqueSet);

    halfCount = nums.length/2; 

    if(uniqueArray.length > halfCount){
        answer = halfCount;
    } else {
        answer = uniqueArray.length;
    }

    return answer;
}