////////////////////////////////////////////
// Beginner Exercises
/// IIFE
//// 1. Simple IIFE

var IIFE = "Test 1";

(function () {
  var IIFE = "Test 2";
  console.log(IIFE);
})();

console.log(IIFE);

//// 2. Basic Counter with IIFE

var counterIIFE = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counterIIFE.getCount());
counterIIFE.increment();
console.log(counterIIFE.getCount());

//// 3. Simple Configuration Object

const configIIFE = (function () {
  return {
    getConfig: function (config = { color: "blue", fontSize: "14px" }) {
      return config;
    },
  };
})();

console.log(configIIFE.getConfig());

///Closures
//// 1. Simple Counter

function createSimpleCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createSimpleCounter();
console.log(counter());
console.log(counter());

//// 2. Greeting Generator

function greet(name) {
  return function (greeting) {
    return console.log(`${greeting}, ${name}`);
  };
}

const greetJohn = greet("John");
greetJohn("Hello");

//// 3. Multiplier Function

function createMultiplier(n) {
  return function (m) {
    return n * m;
  };
}

const double = createMultiplier(2);
console.log(double(5));

/// Higher Order Functions
//// 1. Basic Callback Example

function withDelay(callback, delay) {
  setTimeout(callback, delay);
}

withDelay(() => console.log("This is dealayed"), 1000);

//// 2. Simple Array Filter

function filterArray(arr, callback) {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, (x) => x % 2 === 0);
console.log(evens);

//// 3. Function Timer

function timeFunction(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  console.log(`Function took ${end - start}ms to execute`);
}

timeFunction(() => {
  for (let i = 0; i < 100000; i++) {
    const iCube = i ** 3;
    // console.log(iCube);
  }
});

/// Recursion Exercises
//// 1. Factorial Calculation

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));

//// 2. Fibonacci Sequence

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));

//// 3. Sum of Array

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 10, 15]));

////////////////////////////////////////////
// Advanced Exercises
/// IIFE
//// 1. Private Variable with IIFE

const moduleIIFE = (function () {
  var private = 0;
  return {
    getVar: function () {
      return private;
    },
    setVar: function (value = 0) {
      private = value;
    },
  };
})();

console.log(moduleIIFE.getVar());
moduleIIFE.setVar(42);
console.log(moduleIIFE.getVar());

//// 2. Singleton Pattern with IIFE

const singleton = (function () {
  let instance;

  function createInstance() {
    return {
      name: "John",
      age: 42,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const obj1 = singleton.getInstance();
const obj2 = singleton.getInstance();
console.log(obj1 === obj2);

//// 3. Module Pattern

const myModule = (function () {
  let privateVar = "Private Method";
  let secretVar = "secret";

  function privateMethod() {
    console.log(privateVar);
  }

  function revealSecret() {
    console.log(`El secreto es: ${secretVar}`);
  }

  return {
    publicVar: privateVar,
    publicMethod: function () {
      console.log("Public Method");
      privateMethod();
    },
    setPrivateVar: function (value) {
      privateVar = value;
    },
    getPrivateVar: function () {
      return privateVar;
    },
    setSecret: function (value) {
      secretVar = value;
    },
    getSecret: function () {
      return secretVar;
    },
    showSecret: function () {
      revealSecret();
    },
  };
})();

myModule.publicMethod();
// myModule.showSecret();

//// 4. Lazy Initialization

const lazyMessage = (function () {
  let message = "Initializing...";

  return {
    setMessage: function (msg) {
      message = msg;
    },
    getMessage: function () {
      return message;
    },
  };
})();

const lazyInit = (function () {
  let initialized = false;

  return function () {
    if (!initialized) {
      console.log(lazyMessage.getMessage());
      initialized = true;
    } else {
      lazyMessage.setMessage("Already initialized");
      console.log(lazyMessage.getMessage());
    }
  };
})();

lazyInit();
lazyInit();

//// 5. Configuration Module

const config = (function () {
  let config = {
    theme: "light",
  };

  return {
    set: function (key, value) {
      config[key] = value;
    },
    get: function (key) {
      return config[key];
    },
  };
})();

config.set("theme", "dark");
console.log(config.get("theme"));

/// Closures
//// 1. Memoization Function

function memoize(fn) {
  const cache = {};

  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const slowSquare = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));

//// 2. Private Counter with Reset

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    },
  };
}

const counterAdvanced = createCounter();
console.log(counterAdvanced.increment());
console.log(counterAdvanced.increment());
counterAdvanced.reset();
console.log(counterAdvanced.increment());

//// 3. Once Function

function once(fn) {
  let done = false;
  return function (...args) {
    if (!done) {
      done = true;
      return fn(...args);
    }
  };
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello!");
logOnce("Hello again!");

//// 4. Curry Function

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

//// 5. Function Composition

function closureCompose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;

const closureComposed = closureCompose(subtract3, multiply2, add1);
console.log(closureComposed(5));

/// Higher Order Functions
//// 1. Function Debouncing

function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const logDebounce = debounce(() => console.log("Debounced!"), 500);
logDebounce();
logDebounce();
logDebounce();

//// 2. Throttle Function

function throttle(fn, interval) {
  let last = 0;

  return function (...args) {
    const now = Date.now();
    if (now - last < interval) {
      return;
    }
    last = now;
    fn(...args);
  };
}

const logThrottle = throttle(() => console.log("Throttled!"), 500);
logThrottle();
logThrottle();

//// 3. Custom Map Function

function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbersMap = [1, 2, 3];
const doubled = customMap(numbersMap, (x) => x * 2);
console.log(doubled);

//// 4. Compose Functions

function highOrderCompose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const highOrderComposed = highOrderCompose(add1, multiply2);
console.log(highOrderComposed(5));

//// 5. Partial Application

function partial(fn, ...args) {
  return function (...args2) {
    return fn(...args, ...args2);
  };
}

const add5 = partial(add, 5);

console.log(add5(10, 15));

/// Recursion Exercises
//// 1. Flatten Nested Array

function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, [2, [3, 4], 5], 6]));
console.log(
  flatten([
    [1, 2],
    [3, [4, [5]]],
  ])
);
