function solution(priorities, location) {
  // queue 배열 : idx, 값
  // { 0,  2 }
  // { 1,  1 }
  // { 2,  3 }
  // { 3,  2 }
  const queue = priorities.map((val, idx) => ({ idx, val }));
  let count = 0;

  while (queue.length > 0) {
    // current : 0번부터 뽑기
    const current = queue.shift();

    // 더 큰수가 있으면 뒤로 push
    if (queue.some((item) => item.val > current.val)) {
      queue.push(current);
    } else {
      // 더 큰수가 없으면
      count++;
      if (current.idx === location) {
        return count;
      }
    }
  }
}