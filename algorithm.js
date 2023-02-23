// let counter = 0;
// function inception() {
//   if (counter > 3 ) {
//     return "done";
//   }
//   counter++;
//   return inception();
// }
// console.log(inception());

// Recursion
// inception(
  // inception(
    // inception(
      // inception() <- return "done" )))

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns

// factorial -> 5! = 5*4*3*2*1
// function findFactorialRecursive(number) { //O(n)
//   if (number === 2) {
//     return 2;
//   }
//   return number * findFactorialRecursive(number-1);
// }

// // 2           2
// // 3 * f(2)    6
// // 4 * f(3)    24
// // 5 * f(4)   120 <-

// function findFactorialIterative(number) { //O(n)
//   let answer = 1;
//   if (number === 2) {
//     answer = 2;
//   }
//   for(let i=2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }

// console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(5));

// const fibonacciIterative = (num) => { //O(n)
//   let array = [0,1];
//   for (let i=2; i < num+1; i++) {
//     array.push(array[i-1]+array[i-2]);
//   }
//   return array[num]
// }
// console.log(fibonacciIterative(6));

// const fibonacciRecursive = (num) => { //O(2^n)
//   if (num < 2) {
//     return num;
//   }
//   return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
// }
// console.log(fibonacciRecursive(43));
// // f(1): 1     = 1
// // f(2): 1 + 0 = 1
// // f(3): 1 + 1 = 2
// // f(4): 2 + 1 = 3
// // f(5): 3 + 2 = 5
// // f(6): 5 + 3 = 8

// const letter = ["a", "d", "z", "e", "r", "b"];
// const basket = [2, 65, 34, 2, 1, 7, 8];
// console.log(basket.sort());

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const bubbleSort = (array) => { //O(n^2)
//   let count = 0;
//   while (count < array.length) {
//     for(let j=0; j <array.length; j++) {
//       if (array[j] > array[j+1]) {
//         const left = array[j];
//         const right = array[j+1];
//         array[j] = right;
//         array[j+1] = left;
//       }
//     }
//     count++;
//   }
//   return array;
// }
// console.log(bubbleSort(numbers));

// function selectionSort(array){
//   const length = array.length;
//   for(let i=0; i < length; i++) {
//     const holder = array[i];
//     let minIndex = i;
//     for(let j=i+1; j < length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     array[i] = array[minIndex];
//     array[minIndex] = holder;
//   }
// }
// selectionSort(numbers);
// console.log(numbers);

// function dertSort(array) {
//   for(let i=0; i < array.length; i++) {
//     for(let j=0; j < i; j++) {
//       if (array[j] > array[i]) {
//         const temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
// }
// InsertSort(numbers);
// console.log(numbers);

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }

//   // split array into left and right
//   const length = array.length;
//   const middle = Math.floor(length/2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }

// [ 99 ],  [ 44 ]
//  [ 99, 44 ], [ 6, 2, 1 ]
// [ 99, 44, 6, 2, 1 ], [ 5, 63, 87, 283, 4, 0 ]

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Compare while target is there
//   while(leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++; 
//     }
//   }

//   // A number that wasn't compared is always bigger than numbers in result array
//   const LeftRemnants = left.slice(leftIndex);
//   const rightRemnants = right.slice(rightIndex);

//   // Remnants are being added if there is
//   return result.concat(LeftRemnants).concat(rightRemnants);
// }

// const answer = mergeSort(numbers);
// console.log(answer);

// ==============================================
// Algorithm are used most of the time
// QuickSort
//  - This is the best case most of the time
// MergeSort
//  - Next Choice of QuickSort
//  - If sorting is expected to be the worst case when you use QuickSort
// InsertSort
//  - If item is small
//  - If item are somehow sorted before sorting
//  - If memory is cheap
// ==============================================

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// // Binary Search Tree
// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const node = new Node(value)
//     if (!this.root) {
//       this.root = node;
//       return;
//     } 
//     let currentNode = this.root;
//     while(true) {
//       if (value < currentNode.value) {
//         if (!currentNode.left) {
//           currentNode.left = node;
//           return;
//         } 
//         currentNode = currentNode.left
//       } else {
//         if (!currentNode.right) {
//           currentNode.right = node;
//           return;
//         }
//         currentNode = currentNode.right
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return console.log(null);
//     }
//     let currentNode = this.root;
//     while(currentNode) {
//       if (value === currentNode.value) {
//         return console.log(currentNode);
//       } 
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } 
//       if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       }
//     }

//     return console.log(null);
//   }
//   BFS() {
//     let currentNode = this.root;
//     let list = [];
//     let queue = [];
//     queue.push(currentNode);
    
//     while(queue.length > 0) {
//       currentNode = queue.shift();
//       list.push(currentNode.value);
//       if(currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right)
//       }
//     }
//     return list
//   }
//   // Recursive
//   BFS_R(queue, list) {
//     if (!queue.length) {
//       return list;
//     }
//     let currentNode = queue.shift();
//     list.push(currentNode.value);
//     if(currentNode.left) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right)
//     }
//     return this.BFS_R(queue, list);
//   }
//   DFSInOrder() {
//     return traverseInOrder(this.root, []);
//   }
//   DFSPreOrder() {
//     return traversePreOrder(this.root, []);
//   }
//   DFSPostOrder() {
//     return traversePostOrder(this.root, []);
//   }
// }

// function traverseInOrder(node, list) {
//   if (node.left) {
//     traverseInOrder(node.left, list)
//   }
//   list.push(node.value)
//   if (node.right) {
//     traverseInOrder(node.right, list)
//   }
//   return list;
// }

// function traversePreOrder(node, list) {
//   list.push(node.value)
//   if (node.left) {
//     traversePreOrder(node.left, list)
//   }
//   if (node.right) {
//     traversePreOrder(node.right, list)
//   }
//   return list;
// }

// function traversePostOrder(node, list) {
//   if (node.left) {
//     traversePostOrder(node.left, list)
//   }
//   if (node.right) {
//     traversePostOrder(node.right, list)
//   }
//   list.push(node.value)
//   return list;
// }


// const tree = new BST();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// const bfs = tree.BFS();
// const bfs_r = tree.BFS_R([tree.root], [])
// console.log(bfs);
// console.log(bfs_r);
// const dfs_i = tree.DFSInOrder();
// const dfs_pr = tree.DFSPreOrder();
// const dfs_po = tree.DFSPostOrder();
// console.log(dfs_i);
// console.log(dfs_pr);
// console.log(dfs_po);

//     9
//   4   20
// 1  6 15 170
// BFS(Breadth for search) [9,4,20,1,6,15,170]
// DFS(Depth for search)
// - InOrder   [1,4,6,9,15,20,170]
// - PreOrder  [9,4,1,6,20,15,170]
// - PostOrder [1,6,4,15,170,20,9]

// Dynamic Programming
// function memorizeAddTo80(n) {
//   let cache = {};
//   function closure(n) {
//     if(n in cache) {
//       return cache[n]
//     } else {
//       console.log("long time");
//       cache[n] = n + 80
//       return cache[n];
//     }
//   }
//   return closure;
// }
// const closure = memorizeAddTo80();

// closure(5)
// closure(6);
// closure(5);
// closure(6);

// Nomal O(2^n)
// let calc = 0;
// function fibonacci(n) {
//   calc++;
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(10));
// console.log(calc);

// Dynamic O(n)
// let calc = 0;
// function fibonacci() {
//   let cache = {};
//   function closure(n) {
//     calc++;
//     if (n in cache) {
//       return cache[n]
//     } else {
//       if(n < 2) {
//         return n;
//       }
//       cache[n] = closure(n-1) + closure(n-2);
//       return cache[n];
//     }
//   }
//   return closure;
// }

// const closure = fibonacci();
// console.log(closure(100));
// console.log(calc);