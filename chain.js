//data access
const data = [{id:1,name:'abul',address:'kochu khet'}];
// console.log(data[0].address);

const products = {
    count:5000,
    data:[
        {id:1,name:'lenovo laptop',price:5000},
        {id:2 , name: 'macBook' , price:65000},
    ]

}
// second product price
// console.log(products.data[1].price);

const user = {
    id:5001,
    name:'Junayed Ahmed',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'varsityr opposite',
            third:'doray na',
        },
        city:'Dhaka'
    }
}
// console.log(user.address.street.second)
const user2 = {
    id:5002,
    name:'Hadiun Nahiyan',
    address:{
        city:'chittagong',
        country:"Bangladesh",

    }
}
// ***optional chainning***
console.log(user.address.street?.second);
console.log(user2.address.street?.second);


