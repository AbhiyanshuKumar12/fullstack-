//example 1

document.getElementById("changetextbutton").
//here we are telling that what should happen 
//when we use the normal function then it focus on local call which is calling function
//while arrow function gives the global object 
//how we are grabing the paragraph
addEventListener('click',function(){
    // console.log(this);
    let paragraph = document.getElementById("myparagraph"); // Corrected method name
    //we use console log here to check wheather we have the access or not 
   // console.log(paragraph.textContent);
   //change the value to paragraph

   paragraph.textContent="the paragraph is changed"
    
})

   //example 2
   document.getElementById("highlightfirstcities").
   addEventListener('click',function(){
    let citieslist=document.getElementById("Citiesname")
    // console.log(hold);
    //console.log(citieslist.firstElementChild);
    citieslist.firstElementChild.classList.add("highlight")
    
   })



   //example 3
   document.getElementById("changeorder").
   addEventListener('click',function(){
   let coffetype= document.getElementById("coffetype")
   coffetype.textContent="latte"
   coffetype.style.backgroundColor="brown"
   coffetype.style.padding="5px"
   })



   //example 4
//    document.getElementById("additem").
//    addEventListener('click',function(){
//     let newItem=document.createElement("li")
//     newItem.textContent("EGG");
//     document.getElementById("shoppinglist").appendChild(newItem)
//    })
document.getElementById("additem").addEventListener('click', function() {
    let newItem = document.createElement("li");
    newItem.textContent = "EGG"; // Use `textContent` as a property, not a function
    document.getElementById("shoppinglist").appendChild(newItem);
});




//example 5
document.getElementById("removethelasttask").
addEventListener('click',function(){
  let tasklist = document.getElementById("tasklist")
  tasklist.lastElementChild.remove();
})
// document.getElementById("removethelasttask").addEventListener('click', function() {
//     let tasklist = document.getElementById("tasklist");
//     if (tasklist.lastElementChild) { // Check if there’s at least one child element
//         tasklist.lastElementChild.remove(); // Use `remove()` with parentheses

//     }
// });



//example 6
document.getElementById("clickmebutton").
addEventListener('click',function(){
    alert("connect ")
})


//example 7
document.getElementById("tealist").
addEventListener('click',function(event){
    // console.log(event.target);
    if(event.target && event.target.matches('.teaitem')){
        alert("You selected: " + event.target.textContent)

    }
    

})




//example 8
document.getElementById("feedbackform").addEventListener
('submit',function(){
    // alert("submitted")
    event.preventDefault();
    let feedback=document.getElementById("feedbackinput").value
    console.log(feedback);
    
})





// example 9
document.addEventListener('DOMContentLoaded',function(){
    this.getElementById('domstatus').textContent("DOM fully loaded ")
})



//example 10
// document.addEventListener('togglehighlight').
// addEventListener('click',function(){
//     let descriptiontext=document.getElementById("descriptiontext")
//     descriptiontext.classList.add('highlight')
// })
document.getElementById('togglehighlight').addEventListener('click', function() {
    let descriptiontext = document.getElementById("descriptiontext");
    descriptiontext.classList.toggle('highlight'); // This toggles the highlight on or off
});

