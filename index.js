function receivesAFunction(callback) {
  callback(); // Call the function passed as an argument
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function");
  };
}
