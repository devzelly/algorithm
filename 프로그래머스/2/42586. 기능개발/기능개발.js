// 스택/큐
// - 스택 Stack(LIFO) : array.push, array.pop
// - 큐 Queue(FIFO) : array.push, array.shift
// 풀이 
// - remain 작업기간 계산
// - remain에서 array.shift로 하나씩 빼면서 기준값보다 작은 수들을 합산
// - answer에 합산 반영

// progresses = [93, 30, 55]
// speeds = [1, 30, 5]
progresses = [95, 90, 99, 99, 80, 99]
speeds = [1, 1, 1, 1, 1, 1]

function solution(progresses, speeds) {
  let remain = [];
  let answer = [];

// remain 배열 : [ 7, 3, 9 ] 
// remain 배열 : [ 5, 10, 1, 1, 20, 1 ] 
  for (let i = 0; i < progresses.length; i++) {
    remain.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // answer 배열 : [ 2, 1 ] 
  // answer 배열 : [ 1, 3, 2 ]
  while (remain.length > 0) {
    let current = remain.shift(); // remain[0] 기준 요소 제거 + 리턴
    let count = 1;

    // current보다 작은 값들을 카운트 + 제거
    while (remain.length > 0 && current >= remain[0]) {
      remain.shift();
      count++;
    }

    // count 합산 → answer에 추가
    answer.push(count);
  }
  return answer;
}