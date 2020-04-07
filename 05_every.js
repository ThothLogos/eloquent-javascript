function every(arr, test) {
  for (let e of arr) {
    if (!test(e)) return false;
  }
  return true;
}

function everyS(arr, test) {
  return !arr.some(e => !test(e));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(everyS([1, 3, 5], n => n < 10));
console.log(everyS([2, 4, 16], n => n < 10));
console.log(everyS([], n => n < 10));
