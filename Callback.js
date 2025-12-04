// function callback1(callback2){
//     console.log("this is my callback firsts program");
//     callback2(callback3)
// }
// function callback2(callback3){
// console.log("this is my second callback");
//    callback3()
// }
// function callback3(){
//     console.log("this is my third callback");
// }

// callback1(callback2)



// const mypromise=new Promise((resolve,reject)=>{
//     if(true){
//         console.log("if executed");
//         resolve("successfully complete");
//     }
//     else{
//         console.log("else executed");
//         resolve("api failed")
//     }
// })
// mypromise.then((result)=>console.log(result))
// .catch((error)=>console.log(error));



function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll:"678"})
        },2000);
    })
};
const myfun=async()=>{
    console.log("123")
    const result = await getUserDetails("123");
    console.log(result);
    console.log("456")
};
myfun();