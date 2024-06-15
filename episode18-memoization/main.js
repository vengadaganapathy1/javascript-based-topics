let cache = {};
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const memoizedAdd = memoizeOne(add);
const memoizedSub = memoizeOne(sub);

memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(2, 3);
memoizedAdd(2, 3);

function memoizeOne(fn) {
  return (...arguments) => {
    const key = arguments.join("-");
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...arguments);
      cache[key] = result;
    }
  };
}
