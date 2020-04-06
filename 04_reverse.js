function reverseArray(arr) {
  let res = [];
  for (let e of arr) res.unshift(e);
  return res;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i <= Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[(arr.length-1)-i];
    arr[(arr.length-1)-i] = temp;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4,5]));

inplace = ['A', 'B', 'C', 'D', 'E'];

console.log(reverseArrayInPlace(inplace));
