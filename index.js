const countWrapperRef=document.querySelector('counter-wrapper');
const countRef=document.querySelector('.counter-wrapper .count');
const incrementRef=document.querySelector('.increment');
const decrementRef=document.querySelector('.decrement');
const resetRef=document.querySelector('.reset');
const inputRef=document.querySelector('.change-value-section input');
var currentValue=0;

incrementRef.addEventListener('click',function(){
    const currValue=countRef.innerText;
    const deltavalue=inputRef.value;
    const newVal=+deltavalue+ +currValue;
    countRef.innerText=newVal;


});

decrementRef.addEventListener('click',function(){
    const currValue=countRef.innerText;
    if(currValue <= 0){
        return;
    }
   
    const deltavalue=inputRef.value;
    const newVal=Number(currValue) - Number(deltavalue);
    countRef.innerText=newVal;
});
resetRef.addEventListener('click',function(){
    countRef.innerText=0;


});
inputRef.addEventListener('click',function(){

});

