/*
In JavaScript, shallow copy and deep copy in arrays mean copying an array. The main difference comes when an array contains nested arrays or objects.

1. Shallow Copy (using spread operator ...)
A shallow copy creates a new array, but nested arrays are still shared with the original.

Example 1: Simple array
let arr1 = [10, 20, 30];

let arr2 = [...arr1];

arr2[0] = 100;

Here, changing arr2 doesn't affect arr1 because both arrays contain primitive numbers.
Example 2: Nested array
let arr1 = [10, 20, [30, 40]];

let arr2 = [...arr1];

arr2[2][0] = 100;

console.log(arr1); // [10, 20, [100, 40]]
console.log(arr2); // [10, 20, [100, 40]]


Why did both arrays change?

Because the nested array [30, 40] is shared between arr1 and arr2.
Shallow copy — nested array is shared

2. Deep Copy (using structuredClone())
A deep copy creates a completely independent copy, including nested arrays.
let arr1 = [10, 20, [30, 40]];

let arr2 = structuredClone(arr1);

arr2[2][0] = 100;

console.log(arr1); // [10, 20, [30, 40]]
console.log(arr2); // [10, 20, [100, 40]]


Why didn't arr1 change?

Because structuredClone() created a separate copy of the nested array.
Deep copy — independent nested arrays

arr1
Original
[10, 20, [30, 40]]

arr2
Modified copy
[10, 20, [100, 40]]


3. Difference between shallow and deep copy
Shallow Copy	Deep Copy
[...arr]	structuredClone(arr)
Copies outer array	Copies outer and nested arrays
Nested arrays are shared	Nested arrays are independent
Nested changes can affect original	Nested changes don't affect original

console.log(arr1); // [10, 20, 30]
console.log(arr2); // [100, 20, 30]
*/


/******************************SLICE and SPLICE**********************************/
const myArr = [1,2,3,4,5,6];
console.log("A: ",myArr);

const myArr1 = myArr.slice(1,3);
console.log("A: ",myArr);
console.log("B: ",myArr1)

const myArr2 = myArr.splice(1,3);
console.log("A: ",myArr);
console.log("C: ",myArr2);


