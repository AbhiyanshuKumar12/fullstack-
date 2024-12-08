// more problems on js
// question 1 write a for loop that run and stop at particular place
//use for loop only
// let name= ["ram", "mohan","sohan", "krishna","rishi"]
// //stop the loop when it find the krishna
// let get=[]
// for(let i=0; i<name.length; i++){
//     if(name[i]=="mohan"){
//         break;
//     }
//     else{
//         get.push(name[i])
//         console.log(get);
        
//     }
// }


//question2 to  skip one element in the loop
// let name= ["ram", "mohan","sohan", "krishna","rishi"]
// let get=[]
//using the for loop only
// for(let i=0; i<name.length; i++){
//        if(name[i]=="sohan"){
//         continue;
        
//        }
//        else{ 
//         get.push(name[i]);
      

//        }
//     }
//        console.log(get);
       
//question3 use for of looop
//print a number from 1 to 5 and whn you encounter the 4 brak the loop
// let number=[1,2,3,4,5]
// let newnum=[]
// for (const num of number) {
//     if(num==4)
//         break;
//     else{
//         newnum.push(num);
//     }
// }
// console.log(newnum);


//getting object with the keys
// let name={
//     mohan:99,
//     sohan:44,
//     rishi:88,
//     ramu:78,
// };
// let marks={}

// for(const num in name){
//     if(name[num]>80){
//         continue;
//     }
//     marks[num]=name[num];
    
// }
// console.log(marks);




// write a code to use the for each loop
// let name= ["ram", "mohan","sohan", "krishna","rishi"]
// let storename=[]
// name.forEach(num => {
//     if(num=="krishna"){
//         return;}
//         storename.push(num);
    
    
// });
// console.log(storename);




// a array is given iterate through it and if you foundthe particular number than mutilpy it with 2
// let arr= [2,5,7,9]
// let newarr=[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==7){
//         continue;
//     }
//     else{
//         newarr.push(arr[i]*2);
//     }
// }
// console.log(newarr);



//now you given with the length of string and store the string whose length is smaller than limit
let name= ["ram", "mohan","sohan", "krishna","rishi"]
let newname=[]
for (const num of name) {
    if(num.length>7){
        break;
    }
    else{
        newname.push(num);
    }
    
}
console.log(newname);
