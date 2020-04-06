function deepEqual(a, b) {
  if ((a != null && b != null) && (typeof a == "object" && typeof b == "object")) {
    for (let k of Object.keys(a)) {
      if (typeof a[k] == "object" && k != null) deepEqual(a[k], b[k]);
      if (a[k] !== b[k]) return false;
    }
    return true;
  } else if (a === b) {
    return true;
  } else { return false; }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
