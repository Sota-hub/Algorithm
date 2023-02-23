// Data Structure + Algorithms = Programs

// ---------------------------- Time complexity 
// const nemo = ["nemo"];
// const everyone = ["dory", "hruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
// const large = new Array(1000).fill("nemo");

// function findNemo(array) {
//   let t0 = performance.now();
//   for(let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Find nemo!");
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took" + (t1-t0) + "milliseconds");
// }

// findNemo(large); 
// O(n) -- > Linear Time

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstBoxes(boxes) {
//   console.log(boxes[0]); //O(1) - Constant Time
//   console.log(boxes[1]); //O(1)
// }
// logFirstBoxes(boxes) //O(2)

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) { // O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// }
// BIG O(3 + 4n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; //O(1)
//   let b = 10; //O(1)
//   let c = 50; //O(1)
//   for (let i = 0; i < input; i++) { //O(n)
//     let x = i + 1; //O(n)
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)

//   }
//   for (let j = 0; j < input; j++) { //O(n)
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }
// BIG O(4 + 7n)

// BIG O Rules
// 1 - Worst Case
// 2 - Delete Constants 
// (ex: O(2n + 1) -> O(n))
// 3 - Different terms of input 
// (ex: function cal(a, b) -> O(a + b))
// 4 -  Drop Non Dominants(=Care about most important term)
// (ex: O(n + n^2) -> O(n^2))

// Iterate half a collection
// (ex: O(n/2) -> O(n))
// Nested iteration
// (ex: O(n * n) = O(n^2))

//  O(n!)

// Examples
// "fndsafhhshsubffis".length // O(1)
// (all string has length property)
// ---------------------------------------------

// ---------------------------- Space complexity
// function boo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log("boo!");
//   }
// }
// boo([1, 2, 3, 4, 5]); // O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// }
// console.log(
//   arrayOfHiNTimes(6) // O(n) add n times hi in the memory
//   );
// ---------------------------------------------

// space complexity and time complexity are compensation

// const array1 = ["a", "b", "c", "x"]
// const array2 = ["z", "y", "x"]

// 2 parameter
// true or false

// const compareArrays = () => {
//   for(let i = 0; i < array1.length; i++) {
//     for(let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(
//   compareArrays(array1, array2)
// );


// const compareArrays2 = (array1, array2) => {
//   const obj = {};
//   for(let i = 0; i < array1.length; i++) {
//     if (!obj[array1[i]]) {
//       const item = array1[i];
//       obj[item] = true;
//     }
//   }
//   for(let j = 0; j < array2.length; j++) {
//     if(obj[array2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(
//   compareArrays2(array1, array2)
// );

// const array1 = ["a", "b", "c", "x"]
// const array2 = ["z", "y", "i"]

// const compareArrays3 = (array1, array2) => {
//   return array1.some(item => array2.includes(item))
// }

// console.log(
//   compareArrays3(array1, array2)
// );

// const strings = ["a", "b", "c", "d"];
// // 4*4 = 16 bytes of storage (one string use 4 byte to store)

// strings.push("e"); //O(1)
// strings.pop(); //O(1) *O(n)-what if dynamic array
// strings.unshift("x"); //O(n)
// strings.splice(2, 0,"alien") //O(n)

// console.log(strings);

// reference types
// const obj1 = {value: 10};
// const obj2 = obj1;
// const obj3 = {value: 10}
// // context vs scope
// const obj4 = {
//   a: function() {
//     console.log(this);
//   }
// }
// // instantiation
// class Player {
//   constructor(name, type) {
//     console.log(this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
//   }
// }

