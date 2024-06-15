const a = [1, 2, 3, [4, [5, true, 6]], 7, 8, "eight"];
const b = [1, 2, 3, [4, [5, 6]], 7, 8];

// Question 1
// How to flatten this array ?
console.log(a.flat(2));

// Question 2
// How to flatten this array without using flat method in Array ?
function flattenArray(a, flattenedOutput) {
  a.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element, flattenedOutput);
    } else {
      flattenedOutput.push(element);
    }
  });
  return flattenedOutput;
}

console.log(flattenArray(a, []));

// Question 3
// Sum all values in array without using flat method in Array ?
let sum = 0;
function sumOfAllValues(b) {
  b.forEach((element) => {
    if (Array.isArray(element)) {
      sumOfAllValues(element);
    } else {
      sum += element;
    }
  });
}
sumOfAllValues(b);
console.log(sum);
