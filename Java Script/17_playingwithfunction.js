// // there is no need to write let when you are passing the element
// function add(a,b){
//     return a+b;
// }
// let result=add(4,5)
// // console.log(result);


// //we can also create the function with the ananomous variable name
// // this is also the way to decalare the function
// const multiply= function(a,b){
//     return a*b;
// }
// let product= multiply(3,4)
// // console.log(product);


// //  arrow function-we write the code in shorter version
// const name=(a,b) =>{
//     return a/b;
// }
// const divide=name(10,5)
// // console.log(divide);

// // even more smaller version can be found 
// const square=x=>x*x;
// let s=square(5)
// console.log(s);




//write a example to demostrate the object in the js
let person={
    name:"Abhiyanshu",
    age:123,
    isstudent:true,
    function (){
        return (`My name is ${this.name}`);
    }
    
};
