// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.
discribe function int Fib(int N){
  test("returns an array that length containing the numbers of the Fibonacci sequence")
expect(int Fibonacci(6)).toEqual(1, 1, 2, 3, 5, 8)
  test("returns an array that length containing the numbers of the Fibonacci sequence")
expect(int Fibonacci(10)).toEqual(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
// // Example input: 6
//Expected output: [1, 1, 2, 3, 5, 8]
//
 //Example input: 10
//Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// b) Create the function that makes the test pass.
function int Fib(int N){
  if (N == 0) return 0;
  if (N == 1)return 1;
  int a = 0;
  int b = 1;
  int sum = a + b;
  else if (N > 1) {
    sum = a+b;
    a = b;
    b = sum;
    N--;
  }
  return sum;
  }


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// 
// // a) Create a test with expect statements for each of the variables provided.
// describe(sortArray,() =>{
//     test("returns a new array of only odd numbers sorted from least to greatest")
//         expect(sortArray(4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola")).toEqual(-9, 7, 9, 199)
//     test("returns a new array of only odd numbers sorted from least to greatest")
//         expect(sortArray("hello", 7, 23, -823, false, 78, null, "67", 6, "number")).toEqual(-823, 7, 23)
//         var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//         // Expected output: [-9, 7, 9, 199
//         var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//         // Expected output: [-823, 7, 23]
// // b) Create the function that makes the test pass.
// function sortArray(fullArr1){
//   let oddNums = [];
//   for(let i = 0; i < fullArr1.length; i++){
//     if(fullArr1[i])% 2 !==0) {
//       odd.Nums.push(fullArr1[i]);
//     }
//   }
// oddNums = oddNums.sort((a,b)=> a-b);
// fullArr1.concat(oddNums);
// fullArr1 = fullArr1.sort((a,b) => a-b);
// return array;
// }
//
//
// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//
// // a) Create a test with expect statements for each of the variables provided.
// discribe(const cumulativeSum,() =>{
//   test("take in an array and return an array of the accumulating sum")
//   expect(const cumulativeSum(2, 4, 45, 9)).toEqual(2, 6, 51, 60)
//   test("take in an array and return an array of the accumulating sum")
//   expect(const cumulativeSum(0, 7, -8, 12)).toEqual(0, 7, -1, 11)
//   test("take in an array and return an array of the accumulating sum")
//   expect(const cumulativeSum()).toEqual()
// }
// // var numbersToAdd1 = [2, 4, 45, 9]
// // // Excpected output: [2, 6, 51, 60]
// //
// // var numbersToAdd2 = [0, 7, -8, 12]
// // // Expected output: [0, 7, -1, 11]
// //
// // var numbersToAdd3 = []
// // // Expected output: []
//
// // b) Create the function that makes the test pass.
// const cumulativeSum = (sum => value => sum += value)(2, 4, 45, 9)
