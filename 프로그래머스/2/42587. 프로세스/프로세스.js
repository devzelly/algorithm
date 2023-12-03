const priorities = [1, 1, 9, 1, 1, 1];

function solution(priorities, location) {
  const queue = priorities.map((val, idx) => ({ idx, val }));
  //    idx , val      order 순서
  // { idx:1, val:1 }
  // { idx:0, val:1 }
  // { idx:2, val:9 }    2    1
  // { idx:3, val:1 }    3    2
  // { idx:4, val:1 }    4    3
  // { idx:5, val:1 }    5    4
  //                     1    5
  //                     2    6

  let order = [];
  let orderofLoc = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    // 더 큰수가 있으면 뒤로 push로 붙임
    if (queue.some((item) => item.val > current.val)) {
      queue.push(current);
    } else {
      // cur가 가장 큰수라면
      order.push(current.idx);
      // 9면            2
      // 실행순서(idx) : 2, 3, 4, 5, 1, 2  → location 입력값
    }
  }

  orderofLoc = order.indexOf(location) + 1;
  return orderofLoc;
}
