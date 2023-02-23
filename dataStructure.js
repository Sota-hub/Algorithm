// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`WEE I'm a ${this.type}`)
//   }
// }

// const wizard1 = new Wizard("shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");

// class MyArr {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItem(index);
//     return item;
//   }
  
//   shiftItem(index) {
//     for(let i = index; i < this.length; i++) {
//       this.data[i] = this.data[i+1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArr = new MyArr();
// newArr.push("Hi");
// newArr.push("!");
// newArr.push("you");
// // newArr.pop();
// // newArr.pop();
// newArr.delete(1);
// newArr.push("are");
// newArr.push("nice");
// newArr.delete(0);
// console.log(newArr);

// function reverse(string) {
//   if (!string || string.length < 2) {
//     return;
//   }
//   const backwards = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     backwards.push(string[i]);
//   }
//   return backwards.join("");
// }
// console.log(reverse("ierdnA si eman ym iH"));

// function reverse2(string) {
//   return string.split("").reverse().join("");
// }
// console.log(reverse2("ierdnA si eman ym iH"));

// function mergeSortedArrays(arr1, arr2) {
//   const mergedArray = [];
//   let item1 = arr1[0];
//   let item2 = arr2[0];
//   let i = 1;
//   let j = 1;

//   if (arr1.length === 0) {
//     return arr2
//   }
//   if (arr2.length === 0) {
//     return arr1
//   }

//   while(item1 || item2) {
//     if (!item2 || item1 < item2) {
//       mergedArray.push(item1);
//       item1 = arr1[i];
//       i++;
//     } else {
//       mergedArray.push(item2);
//       item2 = arr2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0,3,4, 31], [4, 6, 30]));

// let user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function() {
//     console.log("ahhhhh!");
//   }
// }
// console.log(user.age); //O(1)
// user.spell = "abra kadabra"; //O(1)
// console.log(user); 
// user.scream(); //O(1)

// // hash table collision
// // O(n/k)

// const a  = new Map(); // able to set other than string as a key different from object and maintain the insertion
// const b = new Set(); // only store the keys

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i=0; i<key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   } // O(1) - consider O(1) since this is really fast

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     } 
//     this.data[address].push([key, value]);
//     return this.data;
//   } // O(1)

//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for(let i=0; i<currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     } // O(1) - because for loop just look up an overflow list
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     for(let i=0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grape", 10000);
// myHashTable.set("apple", 54);
// myHashTable.set("orange", 2);
// console.log(myHashTable.get("grape"));
// console.log(myHashTable.get("apple"));
// console.log(myHashTable.keys());

// function recurringChar(input) {
//   for(let i=0; i < input.length; i++) {
//     for(let j=i+1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i]
//       }
//     }
//   }
//   return undefined;
// } //O(n^2)

// function recurringChar2(input) {
//   let map = {};
//   for(let i=0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   return undefined;
// } //O(n)

// console.log(
//   recurringChar([2,5,1,2,3,5,1,2,4])
//   recurringChar2([2,5,1,2,3,5,1,2,4])
// );

// const basket = ["apples", "grapes", "pears"];

// linked list: 
// apples
//  8947 --> grapes
//           8742 --> pears
//                    372 --> null

// const obj1 = { a: true };
// const obj2 = obj1; // pinter - obj2 points to obj1 location
// obj1.a = "boo"
// delete obj1
// console.log("1",obj1);
// console.log("2",obj2);

// 10 --> 5 --> 16
// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while(currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//     return;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//       return;
//     }
//     const newNode = new Node(value);
//     const leader = this.LoopToBeforeIndex(index);
//     newNode.next = leader.next;
//     leader.next = newNode;
//     this.length++;
//     return;
//   }

//   remove(index) {
//     if (index >= this.length) {
//       return;
//     }
//     const leader = this.LoopToBeforeIndex(index);
//     leader.next = leader.next.next;
//     this.length--;
//   }

//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     this.tail = this.head;
//     let first = this.head;
//     let second = first.next
//     while(second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//   }

//   LoopToBeforeIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter !== index - 1) {
//       currentNode = currentNode.next
//       counter++;
//     }
//     return currentNode;
//   }
// }

// const myList = new LinkedList(10);
// myList.append(5);
// myList.append(16);
// myList.prepend(1);
// myList.printList();
// myList.insert(2, 99);
// myList.insert(22, 88);
// myList.printList();
// myList.remove(3);
// myList.remove(3);
// myList.printList();
// myList.reverse();
// myList.printList();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value, 
//       next: null,
//       prev: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while(currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//     return;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//       return;
//     }
//     const newNode = new Node(value);
//     const leader = this.LoopToBeforeIndex(index);
//     newNode.next = leader.next;
//     newNode.prev = leader;
//     leader.next = newNode;
//     leader.next.prev = newNode;
//     this.length++;
//     return;
//   }

//   remove(index) {
//     if (index >= this.length) {
//       return;
//     }
//     const leader = this.LoopToBeforeIndex(index);
//     leader.next = leader.next.next;
//     this.length--;
//   }

//   LoopToBeforeIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter !== index - 1) {
//       currentNode = currentNode.next
//       counter++;
//     }
//     return currentNode;
//   }
// }

// const myList = new DoublyLinkedList(10);
// myList.append(5);
// myList.append(16);
// myList.prepend(1);
// console.log(myList);
// myList.printList();
// myList.insert(2, 99);
// myList.insert(22, 88);
// myList.printList();
// // myList.remove(3);
// // myList.remove(3);
// // myList.printList();

// Stacks - Linked List
// Queues - Linked List

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   //see the top node
//   peek() {
//     console.log(this.top);
//     return
//   } 

//   //add a node to a top of the stack
//   push(value) {
//     const node = new Node(value);
//     if (this.length === 0) {
//       this.top = node;
//       this.bottom = node;
//     } else {
//       const hold = this.top;
//       this.top = node;
//       this.top.next = hold;
//     }
//     this.length++;
//   } 

//   //remove a node to a top of the stack
//   pop() {
//     if (!this.top) {
//       return;
//     }
//     if(this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const garbageCollection = this.top;
//     this.top = this.top.next;
//     this.length--;
//   } 
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("youtube");
// myStack.push("discord");
// // myStack.peek();
// myStack.pop();
// // myStack.peek();
// myStack.pop();
// // myStack.peek();
// myStack.pop();
// myStack.peek();

// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     console.log(this.array[this.array.length-1]);
//     return;
//   }
//   push(value) {
//     this.array.push(value);
//     return;
//   }
//   pop() {
//     this.array.pop();
//     return;
//   }
// }
// const myStack = new Stack();
// myStack.push("google");
// myStack.push("youtube");
// myStack.peek();
// myStack.pop();
// myStack.peek();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   //see first item
//   peek(){
//     console.log(this.first);
//     return;
//   } 
//   // add to the que
//   enqueue(value){
//     const node = new Node(value);
//     if (this.length === 0) {
//       this.first = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }
//     this.length++;
//     // console.log(this.first);
//     // console.log(this.last);
//     return;
//   }
//   // remove first item
//   dequeue(){
//     if (!this.first) {
//       return;
//     } 
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.length--;
//     return
//   }
// }

// const myQueue = new Queue();
// myQueue.enqueue("Joy")
// myQueue.enqueue("Matt")
// myQueue.enqueue("Pavel")
// myQueue.enqueue("Samir")
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();

// Level0: 2^0 = 1;
// Level1: 2^1 = 2;
// Level0: 2^2 = 4;
// Level0: 2^3 = 8;

// number of nodes = 2^h - 1;
// log nodes = height
// log 100 = 2
// 10^2 = 100

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
//   remove() {}
// }

// const tree = new BST();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.lookup(9);
// tree.lookup(4);
// tree.lookup(15);
// tree.lookup(260);

//     9
//   4   20
// 1  6 15 170

// Edge List
// const graph = [[0,2, [2,3], [2,1], [1,3]]];

//  Adjacent List
// const graph = [[2], [2,3], [0,1,3], [1,2]]

// Adjacent Matrix
// const graph = {
//   0: [0,0,1,0],
//   1: [0,0,1,1],
//   2: [1,1,0,1],
//   3: [0,1,1,0]
// }

// class Graph {
//   constructor() {
//     this.numberOfNodes = 0;
//     this.adjacentList = {};
//   }
//   addVertex(node) {
//     this.adjacentList[node] = [];
//     this.numberOfNodes++;
//   }
//   addEdge(node1, node2) {
//     this.adjacentList[node1].push(node2);
//     this.adjacentList[node2].push(node1);
//   }
//   showConnections() {
//     console.log(this);
//   }
// }

// const graph = new Graph();
// graph.addVertex("0");
// graph.addVertex("1");
// graph.addVertex("2");
// graph.addVertex("3");
// graph.addVertex("4");
// graph.addVertex("5");
// graph.addVertex("6");
// graph.addEdge("0", "2");
// graph.addEdge("1", "0");
// graph.addEdge("1", "2");
// graph.addEdge("3", "1");
// graph.addEdge("3", "4");
// graph.addEdge("4", "2");
// graph.addEdge("4", "5");
// graph.addEdge("5", "6");
// graph.showConnections();