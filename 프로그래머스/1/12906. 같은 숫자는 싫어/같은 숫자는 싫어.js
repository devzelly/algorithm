// 스택 Stack(LIFO) : push, pop
// arr에서 하나씩 뽑아서 stack에 push하면서 
// 마지막에 넣은것이 중복된 것이면 pop하기
function solution(arr) {
  const stack = [];
  for (const num of arr) {
    stack.push(num);
    if (stack[stack.length-2] === stack[stack.length-1]) {
      stack.pop();
    }
  }
  return stack;
}

const arr = [1, 1, 3, 3, 0, 1, 1];