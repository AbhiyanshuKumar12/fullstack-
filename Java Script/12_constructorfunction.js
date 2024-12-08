//this is the creation of class
function car(company,model){
    this.company=company;
    this.model=model;
}

//now create the object
let mynewcar=new car("Tata","jaguar");
// console.log(mynewcar);
//same class but the different object thatswhy we call it as the blueprint of the class
let anothercar=new car("mahindra","bolero");
// console.log(anothercar);


//we can use describe inside the  function 
function tea(teatype){
    this.teatype=teatype;
    this.describe=function()
    {
        return `this is ${this.teatype}`
    }
}
let knowtea=new tea("lemon tea")
// console.log(knowtea.describe());


function animal(species){
    this.species=species;
}
animal.prototype.sound= function()
{
    return `${this.species} makes a sound`
}
let dog= new animal("dog")
console.log(dog.sound() );
