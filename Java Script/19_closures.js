//in closure we access the value from outside the inner loop as here we accesing the count
function outer(){
    let count=4;
    return function(){
        count++;
        return count++;
    }
}
let increment=outer();
console.log(increment());
