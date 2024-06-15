// Implement chunk
// chunk([1, 2, 3, 4, 5], 4) should return [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 5));

function chunk(arrayToBeChunked, size) {
  let count = 0;
  return arrayToBeChunked.reduce((result, cV, cI, arrayToBeChunked) => {
    count += 1;
    if (count === 1) {
      const arr = [];
      arr.push(cV);
      result.push(arr);
    } else if (count <= size) {
      result[result.length - 1].push(cV);
    }
    if (size === count) {
      count = 0;
    }
    return result;
  }, []);
}
