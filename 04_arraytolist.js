function arrayToList(arr) {
  if (arr.length == 0) {
    return null;
  } else {
    return { value: arr.shift(), rest: arrayToList(arr) };
  }
}

function listToArray(list) {
  if (list.rest == null) {
    return [list.value];
  } else {
    return [list.value, listToArray(list.rest)].flat();
  }
}

function prepend(e, list) {
  return { value: e, rest: list };
}

function nth(list, num) {
  return listToArray(list)[num];
}

console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10,20,30,40,50])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
