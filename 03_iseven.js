function isEven(num) {
  if (Math.abs(num) == 0) {
    return true;
  } else if (Math.abs(num) == 1) {
    return false;
  } else {
    return isEven(Math.abs(num)-2);
  }
}


console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(10));
console.log(isEven(12380));
console.log(isEven(12381));
console.log(isEven(-1));