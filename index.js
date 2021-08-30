function callback() {
  console.log("check tanks");
}

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return callback;
}

function returnsAnAnonymousFunction() {
  return function () {
    "hello";
  };
}
