// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers


//with the help of loop
// let i;
// let n=10
// let sum=0;
// for(i=1; i<=n; i++)
// {
//         sum=sum+i;
// }
// console.log(sum);


//with the help of function
function sum( n)
{ 
    let sum=0;
for(i=1; i<=n; i++)
{
        sum=sum+i;
}
return sum;

}
console.log(sum(10));
