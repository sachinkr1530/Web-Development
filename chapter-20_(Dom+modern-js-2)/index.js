//  yeha par kaam karega 

// const { createElement } = require("react");
// const { href } = require("react-router-dom");

// function eventFunction(){
    
//     console.log('I have Clicked on the document ');
// }
// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);



// const content = document.querySelector('#wrapper ');
// content.addEventListener('click',function(event){
//     console.log(event);
// })




// let links=document.querySelectorAll('a');
// let thirdLinks=links[2];

// thirdLinks.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya,acha laga ');
// });




    //  here remove handling kaam nahi karega  


// document.addEventListener('click',function(){
//     console.log('I have to clicked on the document ');
// });


// document.removeEventListener('click',function(){
//     console.log('I have to clicked on the document ');
// });





// document.addEventListener('click', function(){
//     console.log('T have Clicked on the document ')
// });





// let myDiv=document.createElement('div');
// for (let i=1;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent="This is para "+i;
//     newElement.addEventListener('click',function(event){
//         console.log("I have clicked on para");
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);







// let myDiv=document.createElement('div');

//     function paraStatus(event){
//         console.log('para'+event.target.textContent);
//     }
//     myDiv.addEventListener('click',paraStatus);
//     for (let i=1;i<=100;i++){
//         let newElement=document.createElement('p');
//         newElement.textContent='This is para'+i;


//         myDiv.appendChild(newElement);
//     }
//     document.body.appendChild(myDiv);







let element=document.querySelector("#wrapper");

element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
    console.log('span pr click kia hai '+event.target.textContent);
    }
});
