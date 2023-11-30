// 스택/큐
// - 스택 Stack(LIFO) : array.push, array.pop
// - 큐 Queue(FIFO) : array.push, array.shift
// 풀이 
// - 괄호 parenthesis 
// - 시작은 ( , 끝은 ) 
// - (은 -1 )은 +1로 계산해서 최종 0이 되는지 검증
// - 양수로 전환되면 false 이다

function solution(s) {     
    let result = 0; 
    if(s[0] !== '(') {
       return false;
    } 
    for (let char of s) { 
        // 0 또는 음수만 가능 
        if(char === '(') {
            result-- ;
        } else {
            result++ ; 
            if(result > 0) 
                return false;
        }
    }      
    return result === 0 ;  
}