/**
 * 1.var let const
 * 2.default parameter
 * 3.template string
 * 4. arrow function
 * 5.destructuring and spread operator
 * 6. Object.keys,Object.values,Object.entries
 * 7.for of used in array and string,
 * 8. for in loop used in object
 */

// template string
const a = 54;
const num = [56,7,8];
const person={
    name:'Salim Ali'
}
const message = `Hi , ${person.name} has a: ${a} access to ${num[2]}`;
// console.log(message);

// arrow function
const square = x=>x*x;
const sum = (a,b)=> a+b;

//destructuring
const {age,z,...others} = {x:2,y:5,z:3,name:'object',age:55}
console.log(others)// others bakigula ke niye ekta array create korbe
const [first,second,...remaining] = ['ram','sam','jodhu','modhu']
console.log(first);//ram
console.log(remaining);//['jodhu','modhu']