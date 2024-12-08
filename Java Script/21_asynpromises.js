// function fenchdata(){
//     return new Promise((resolve,reject)=>{

//     },3000)
//     resolve({name:"chai code", URL:"https://chaicode.com"})
// }

// async function getuserdata() {
//     try {
//         //you can only use the keyword await when async is used
//         console.log("Fenching the data...");
//        const userdata= await fenchdata();
//        console.log("Userdata:",userdata);
       
        
//     } catch (error) {
//         console.log("error fetching data");
        
        
//     }
    
// }
// getuserdata();
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "chai code", URL: "https://chaicode.com" });
        }, 3000); // Use setTimeout to simulate a delay
    });
}

async function getUserData() {
    try {
        console.log("Fetching the data...");
        const userData = await fetchData(); // Await the resolved value from the Promise
        console.log("User data:", userData);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getUserData();
