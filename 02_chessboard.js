let board = "";
let idx = 0;

for (let i = 1; i <= 8; i++, idx++) {
  if (i % 2 != 0) {
    board += ' ';
  } else {
    board += '#';
  }
  for (let j = 1; j <= 8; j++, idx++) {
    if (board.charAt(idx) == ' ') {
      board += '#';
    } else {
      board += ' ';
    }
  }
  board += '\n';
  idx++;
}

console.log("\n" + board);