// 스택 Stack(LIFO) : push, pop
// arr에서 하나씩 뽑아서 stack에 push하고 
// 마지막에 넣은 것이 혹시 중복된 것이면 다시 꺼내기(pop)
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