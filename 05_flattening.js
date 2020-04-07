let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce( (acc, curr) => { return acc.concat(curr); }, []));


let arr1 = ['a', 'b', 'c'];
let arr2 = ['e', 'f', 'g'];

console.log(arr2.concat(arr1));
