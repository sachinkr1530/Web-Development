console.log('chaliye shuru karte hai');

// const rectangle={
//     length:1,
//     breadth:3,

//     draw: function() {
//         console.log('drawing REctangle');
//     }
// };

// factory function

//  factory function used -> Camelcase-> ex-> numberOfStudents

// function createRectangle(len,bre){

//     return rectangle={
//         length:len,
//         breadth:bre,
//     // length:length,
//     // breadth:breadth,

//     draw: function() {
//         console.log('drawing REctangle');
//     }
// };
// }
// let rectangleObj1 = createRectangle(5,4);
// let rectangleObj2 = createRectangle(2,3);
// let rectangleObj3 = createRectangle(7,9);
// rectangle.breadth; 


// constructor function

// constructor function-> Used Pascal notation -> first letter of every word is capital->NumberOfStudent
// constructor function -> prop/methods-> intialise/Define

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}

// object creation using constructor function
// let rectangleObject=new Rectangle(4,6);
// //  Dynamic Nature of object it's means to add and delete object in dynamic 
// rectangleObject.color='yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);
 
// let Rectangle1=new Function(
//     'length','breadth',
//     `this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drawing');
//     }`);
//     //  object creation using Rectangle1 
//     let rect=new Rectangle1(2,3);
//     console.log(rect);


// let a={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value); 


//  for-in

let rectangle={
    length:2,
    breadth:4
};
// for(let key in rectangle){
//     //  keys are reflected through key variable
//     // values are refleted through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for-of

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle)
// {
//     console.log('Present');
// }
// else{
//     console.log('absent');
// }


//  object-colone #1 iteration

// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);


//  object cloning #2 assign
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let src2={value:25};
// let dest=Object.assign({},src,src2);
// console.log(dest);
//  src.a++;
// console.log(dest);


// object cloning #3 Spread

let src={
    a:10,
    b:20,
    c:30
};
let dest={...src};
console.log(dest);
 src.a++;
console.log(dest);
