// console.log("hyy bhai");
// let lastName="nawneet";



// let firstName=new String('Kumar');
// let message=
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Sachinkr`;
// console.log(message);
// // let words=message.split(' ');
// // console.log(words);


// Date and time 

// let date=new Date();

// let date2=new Date('june 07 2025 11:34' );
// let date3=new Date(2002,3,15,11);
// console.log(date3);

// date3.setFullYear(2004);
// console.log(date3);



// Arrays

// let numbers=[1,3,5,6,7];
// // // end push
// // numbers.push(9);
// // // begin
// // numbers.unshift(8);
// // // Middle
// // numbers.splice(2,0,'a','b','c');
// // console.log(numbers);

// // searching
// console.log(numbers);
// console.log(numbers.indexOf(66));

// we want to check if a number exits in an array 

// if(numbers.indexOf(10)!=2)
//     console.log('present');
// console.log(numbers.includes(6));
// console.log(numbers.indexOf(4,2));

// let courses=[
//     {no:1,naam:'sachin'},
//     {no:2,naam:'Rahul'}
    
// ];
// // console.log(courses);
// // console.log(courses.includes({no:1,naam:'sachin'}));

// let course=courses.find(courses=>courses.naam==='Rahul ') 


//  Removing element

// let numbers=[1,2,3,4,5,6,7];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);
// console.log(numbers);


// let numbers=[1,2,3,4,5,6,7];
// let numberr2=numbers;
// // numbers={};
// // numbers.length=0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numberr2);


// //  Adding maltb combining
// let first=[1,2,3];
// let second=[4,5,6];
// let combined= first.concat(second);
// console.log(combined);


// //  katna hoga maltb slice
// let marks=[10,20,30,40,50,60,70,80];
// let sliced=marks.slice();
// // let sliced=marks.slice(2,6);
// console.log(sliced);



// let first=[1,2,3];
// let second=[4,5,6];
//  let combined=[...first,'a',...second,'b'];
//  console.log(combined);

// //  copy kaise create karu

// let another =[...combined];

// console.log(another);


//  iterating an array


// let arr=[10,20,30,40,50];
// // for(let value of arr){
// //     console.log(value);
// // }
// arr.forEach(number=>console.log(number));



// joining Arrays

// let number =[10,20,30,40,50];
// const joined=number.join(',');
// console.log(joined);


//  split

// let message ='This is my first message';
// let parts= message.split(' ');
// console.log(parts);

// let joined=parts.join('_');
// console.log(joined);


// sorting

// let numbers=[4,30,10,20,50];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);



//  filter

// let number =[1,2,3,-4,-5,-6];
// let filtered=number.filter((value)=> value>=0);

// console.log(filtered);



// Mapping Arrays

// let number=[7,8,9,10];
// let items =number.map(value=> 'student_no'+value);
// console.log(items);

let num=[1,2,3,4,-5-6];

let items=num
.filter(value=>value>=0)
.map(num=>{value:num});
console.log(items);