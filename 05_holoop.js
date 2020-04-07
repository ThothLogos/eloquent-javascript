function loop(val, test, up, body) {
  for (let i = val; test(i); i = up(i)) {
    body(i);
  }
}

loop(3, n => n > 0, n => n-1, n => console.log(n));