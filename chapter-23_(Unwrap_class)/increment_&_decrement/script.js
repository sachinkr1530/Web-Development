const countValue=document.querySelector("#counter");
function increment(){
// const increment=()=>{
    // get the value from UI
    let value=parseInt(countValue.innerText);
    // update the value
    value=value + 1;
    // set the value to UI
    countValue.innerText=value;
};


function decrement() {
// const decrement=()=>{
    // get the value from UI
    let value=parseInt(countValue.innerText);
    // update the value
    value=value -1;
    // set the value to UI
    countValue.innerText=value;
};