// console.log("kya haal");

// js is dynmic 
//  hoisting => it is a process of moving function declaration to the top of file
// (*)Note => done automatically by js-engine
// run();
// function run(){
//     console.log("running");
// }


// //  Named function assigment

// let stand=function walk()
// {
//     console.log("Walking");
// };
// stand();


// // Anonymous function assigment  
// let stand2=function ()
// {
//     console.log("Walking");
// };
// stand();


// // let jump=stand;
// // jump();
// // stand2();

// // function sum(a,b){
// //     let total=0;
// //     for (let value of arguments)
// //         total=total+value;
    
// //     return total;

// // }
// // //  console.log(sum(1,1));
// // //   console.log(sum(1))
// // // console.log(sum(1,1,12,3,4,5,7))
// // let ans=sum(1,2,12,3,4,5,7);
// // console.log(ans);


// //  Rest operator(...)

// //  its print array

// // function sum(...args){
// //     console.log(args);
// // }
// // sum(1,2,3,4,5,6,7,8);


// // function sum(num,value,...args){
// //     console.log(args);
// // }
// // sum(1,2,3,4,5,6,7,8);



// //  Default parameter

// function intrest (p,r=5,y=10){
//     return p*r*y/100;
// }
// // console.log(intrest(1000,undefined ,8));


// // GETTER SETTER
// // GETTER=> access properties
// // SETTER=> change or mutate properties

// // let person={
// //     fName:'sachin',
// //     lName:"Thakur",
// //     get fullName()
// //     {
// //         return `${person.fName} ${person.lName}`;
// //     },
// //     set fullName(value) {
// //         if(typeof value!==String){
// //             throw new Error("You have not sent a string");
// //         }
// //         let parts=value.split(' ');
// //         this.fName=parts[0];
// //         this.lName=parts[1]; 
// //    }
// // };

// // try{
// //     person.fullName=true;
// // }
// // catch(e){
// //     alert(e);
// // }

// // console.log(person)
// // person.fullName='Rahul kumar'; 
// // console.log(person.fullName);



// // {
// // var a=5;
// // }
// // console.log(a);

// // function walk(){
// //     var a=5;

// // }
// // console.log(a);

// // for (var i=0;i<5;i++)
// // {

// // }
// // console.log(i);

// // if(true){
// //     var a=6; 
// // }
// // console.log(a);


// // function a()
// // {
// //     const ab=5;

// // }
// // const ab=5;
// // function b()
// // {
// //     const ab=5;
// // }

// let arr=[1,2,3,4];
// // let total=0;
// // for (let value of arr){
// //     total=total+value;
// // }
// // console.log(total);



// let totalsum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log("Printing");
// console.log(totalsum);


