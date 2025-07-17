// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');



// Asyrchronous js 

// setTimeout(function(){
//     console.log('third');

// },3000)
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');



//   promise


// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise1');
//     },5000);
//     // resolve(123456);
//     // resolve(3223);
//     reject(new Error('BhaiSahab Error aaye hai'))


//     // console.log('i am inside promise');
//     // resolve(1998);
// });
//  meraPromise1.then((value) => {console.log(value),(error)=>{console.log("recived an error")}});




// let meraPromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise2');
//     },5000);
//     // resolve(3223);
//     // reject(new Error('BhaiSahab Error aaye hai'))


//     // console.log('i am inside promise');
//     // resolve(1998);
// });
// console.log('pehla');



// let waadaa1=new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })
// let output=waadaa1.then(()=>{
//     let waadaa2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//         console.log('settimeout2 started');
//     },3000);
//         resolve("Waada 2 resolved");
//     })
//     return waadaa2;
// })
// output.then((value)=>console.log(value));




//   Async function

// async function abcd()
//  {
//     return "kya hua tera";
// }


// async function utility(){

// let DelhiMausam = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("Delhi me bahut garmi hai ");
//     },3000);
// });


// let hydMausam = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("Hyderabed is cool ");
//     },4000);
// });

// let dM = await DelhiMausam;
// let hM = await hydMausam;

// return [dM, hM];
// }



// let obj={
//     heading:"head"
// };

// async function utility(){
//     let content = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();


// async function helper(){

// let options ={
//     method: 'POST',
//     body:JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         weight:90,
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };
// let content= await fetch ('https://jsonplaceholder.typicode.com/posts', options);
// let response = content.json();
// return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }
// utility();





//  closures 


function init(){
    //  let => block scop
    let name ="Mozilla";
    function displayName (){
        console.log(name);
    }
    return displayName();
}
let  a= init();
a();