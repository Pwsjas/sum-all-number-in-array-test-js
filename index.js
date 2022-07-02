function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((value) => {
    if (Array.isArray(value)) {
      sum += sumItems(value);
    } else {
      sum += value;
    }
  })
  return sum;
};
module.exports = sumItems;