// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1,5,6,4,15]
const players = [70,77,85,67,68,55];
// const selected = players.filter(p=>p>70);
const selected = players.filter(p=>p%2===0);
console.log(selected);
const friends = ['Tom','John','Micheal','Oliver'];
const oddFriends = friends.filter(friend=>friend.length>=4);
console.log(oddFriends);
