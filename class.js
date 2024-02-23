const products = [
    {id:1, name:'lenovo',price:65000},
    {id:2, name:'dell',price:45000},
    {id:3 , name:'hp',price : 48000},
]

// similar 
// has some properties,method
class Product{
    country = 'Bangladesh';
    speak(talk){
        console.log(`taiking ${talk}`)
    }
    constructor(name){
         this.name = name;
    }

}
const lenovo = new Product('salim');
// console.log(lenovo)
// lenovo.speak('Munira caa jaal de')

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}
const Topon = new Teacher('Hussain Jonab',"Qur'an");
console.log(Topon);
