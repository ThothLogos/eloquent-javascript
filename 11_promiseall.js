function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let count = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then( function(res) {
        console.log(`Location ${i} got res: ${res}`);
        arr[i] = res;
        count--;
        if (count == 0) resolve(arr);
      }, function(err) {
        reject(err);
      });
    }
    if (promises.length == 0) resolve(arr);
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });