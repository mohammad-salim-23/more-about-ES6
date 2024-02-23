const products = [
    {id:1, name:'lenovo',price:65000},
    {id:2, name:'dell',price:45000},
    {id:3 , name:'hp',price : 48000},
]

// map
const names = products.map(products=>products.name);
// console.log(names);

// forEach
// products.forEach(p=>console.log(p.name));
// filter
const unique = products.filter(p=>p.price>45000 && p.price<50000)
// console.log(unique)
// find
const search = products.find(p=>p.price<50000)
console.log(search.name);
// reduce
const total = products.reduce((previoussum,current)=>previoussum+current.price,0)
console.log(total); 