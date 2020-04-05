function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'B') count++;
  }
  return count;
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) count++;
  }
  return count;
}

console.log(countBs("OogaBooga"));
console.log(countBs("BabaBooey"));
console.log(countBs("BaBaBooey"));
console.log(countBs("BBBBBBBBB"));
console.log(countBs("bbbbbBbbb"));

console.log(countChar("OogaBooga", 'o'));
console.log(countChar("BabaBooey", 'B'));
console.log(countChar("Mississippi", 'i'));
