// map==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally return you the array
const numbers = [4,5,6,7];
// function doubleIt(num){
//     console.log('num now',num);
//     return num*2;


// }
// const result = numbers.map(doubleIt);
// console.log(output);
// 2 number way
const double2 = n=>n*2;
const output = numbers.map(double2)
// 3 number way
const output2 = numbers.map(n=>n*2);
console.log(output2);



// console.log(result);
// const doubled = [];
// for(const num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }
// console.log(doubled);
