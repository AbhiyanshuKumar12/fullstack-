function fetchpostdata(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("post data fetched")
        },2000)
    })
}
function fetchcommondata(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Comment data fetched")
        },2000)
    })
}