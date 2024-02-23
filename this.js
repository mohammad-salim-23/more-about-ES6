class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('Kodom Ali',78);
console.log(kodom);
kodom.sleep();
const badam = new Person('Badam Ali',99);
// badam.sleep();
badam.activity();