// asychronous means it will not be continious there will be pause 
// on any website where we get the pop upat the top of the website and we can set the timer for that
// facilities like timeout js do not provide but it take it from the web browse 
function sayhello(){
    console.log("I would like to say hello");  
}
setTimeout(()=>{
    sayhello();
},4000)
for (let index = 0; index < 10; index++) {
   console.log(index);
}
