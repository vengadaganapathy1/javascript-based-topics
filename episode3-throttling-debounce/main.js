// Debouncing

let counter = 0;
const getData = (url) => {
  counter += 1;
  console.log("called " + url + " " + counter);
};

const debounce = (fn, delay) => {
  let timer;
  return (...arguments) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn(...arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// Throttling

// let expensiveCounter = 0;

// const expensive = () => {
//   expensiveCounter += 1;
//   console.log("Expensive " + expensiveCounter);
// };

// function throttle(fn, limit) {
//   let flag = true;
//   return () => {
//     if (flag) {
//       fn();
//       flag = false;
//     }
//     setInterval(() => {
//       flag = true;
//     }, limit);
//   };
// }

// const betterExpensive = throttle(expensive, 2000);

// window.addEventListener("resize", betterExpensive);

const btn = document.querySelector("#throttle");

// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference
    // between previously
    // called and current called timings
    // console.log(now - prev, delay);

    // If difference is greater
    // than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread
      // operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

window.addEventListener(
  "resize",
  throttleFunction(() => {
    console.log("resize event triggered");
  }, 1500)
);
