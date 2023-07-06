//using concat()

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = array1.concat(array2);

console.log(mergedArray);

//using spread operator (...)

const mergedArr = [...array1, ...array2];

console.log(mergedArr);

//using push() merge into an array without creating a new one

array1.push(...array2);

console.log(array1);