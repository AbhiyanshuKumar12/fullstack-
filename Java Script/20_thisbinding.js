const person={
    name:"abhi",
     greet(){
        console.log(`hey,this is ${this.name}`);
        
    }
}
person.greet();
//it works nicely till here 

const greetfunction=person.greet
greetfunction();

//you have to manually bind the content

const boundgreet= person.greet.bind({name:"ravi"})
boundgreet();