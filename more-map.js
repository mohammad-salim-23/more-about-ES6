const numbers = [12,10,8,15,7];
const dobled = numbers.map(num=>num*2);
// console.log(dobled);

const fiveBonus = numbers.map(num=>num+5);
// console.log(fiveBonus);

const halves = numbers.map(num=>num/5);
// console.log(halves);
const square = numbers.map(num=>num*num);
console.log(square);

const friends = ['Tom','John','Micheal','Oliver'];
const lengths = friends.map(frnd=>frnd.length);
// console.log(lengths);
const firstLetter = friends.map(friend=>friend[0]);
console.log(firstLetter);

