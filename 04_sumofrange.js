function range(start, end, step=1) {
  arr = []
  if (start <= end) {
    for (let i = start; i <= end; i+=step) arr.push(i);
  } else {
    for (let i = start; i >= end; i+=step) arr.push(i);
  }
  return arr;
}

function sum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(range(1,10));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(range(-9,-5));

console.log(sum(range(1,10)));
console.log(sum(range(-9,-5)));
console.log(sum(range(5,2,-1)));
console.log(sum(range(-5,-9,-2)));