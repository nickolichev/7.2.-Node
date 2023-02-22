/* eslint-disable no-debugger */
function func() {
  let x = 10;
  let y = 20;

  function sum(a, b) {
    return a + b;
  }

  console.log(sum(x, y)); // 30
  debugger;
  x = 20;
  y = 30;

  console.log(sum(x, y)); // 50
}

func();