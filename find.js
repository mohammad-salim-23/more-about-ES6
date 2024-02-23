// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const players = [70,77,85,67,68,55];
const selected = players.find(p=>p>50);
console.log(selected);

/**
 * 1.map: sobgula element niye kaj kore and array akare return kore
 * 2.forEach: kunu kicu return kore na, individually pottekta element niye kaaj kore
 * 3.filter : jegular jonno condition true hobe oigula ke ekta array te reke tarpore oitake return korbe
 * 4.find: first jetar jonno condition true hobe , oitakei return kore debe , just value return korbe not array
 */