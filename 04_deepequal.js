function deepEqual(a, b) {
  if ((a != null && b != null) && (typeof a == "object" && typeof b == "object")) {
    for (let k of Object.keys(a)) {
      if (typeof a[k] == "object" && typeof b[k] == "object") {
        if (!deepEqual(a[k], b[k])) { return false; }
      } else {
        return (a === b);
      }
    }
  } else {
    return (a === b);
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
