//genertor is nothing but the it push the data one by one means it will not run continuosly 
//but in the form of stoke "ek laat me ek hi baar chot lagega"
// and it is denoted by * at the function which means it is the generator
function* name(){
    yield 1;
    yield 2;
     yield 3;

}
let gen = name()
// console.log(gen);
console.log(gen.next().value);
//next() is an iterator
