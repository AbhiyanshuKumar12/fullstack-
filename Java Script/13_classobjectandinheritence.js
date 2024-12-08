let car={
    make:"tata",
    model:"nano",
    year:2024,
    start: function()
    {
        return `${this.make} car got started in ${this.year} year`
    }
}
// console.log(car.start());
 

function animal(type)
{
    this.type=type;
}
animal.prototype.speak=function(){
    return ` ${this.type} make a sound`
}
Array.prototype.hitesh=function()
{
    return `custom method ${this}`
}
let myarray=[1,2,3]
// console.log(myarray.hitesh());
let mynewarray=[1,2,3,4,5,6]
// console.log(mynewarray.hitesh());

//now creating the class
class vehicle{
    constructor(make,model)
    {
        this.make=make;
        this.model=model;
    }
    //methods
    start(){
        return `${this.model} is car made by ${this.make}`
    }
}

//creating the  new class for inheritence
class Car extends vehicle{
    drive(){
         return `${this.make}:this is inheritence example`
    }
}

let mycar= new Car("tata","safari");
console.log(mycar.start());
console.log(mycar.drive());

