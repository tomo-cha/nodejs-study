'use strict';
// 全部足す
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);

// フィボナッチ数列
// 再起関数
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}