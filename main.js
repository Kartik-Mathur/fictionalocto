const bubbleSort = require('./bubbleSort')
const selectionSort = require('./selectionSort')
console.log('hello world');

let numbers = [64, 25, 12, 22, 11];
console.log("Sorted array:", bubbleSort(numbers));

let numbers2 = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(numbers));
// added a comment