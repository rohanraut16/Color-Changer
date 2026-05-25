let container=document.querySelector('.container')
let currentColorValue=document.querySelector('.currentColorValue')
let randomBtn=document.querySelector('.randomBtn')
let inputColor=document.querySelector('#inputColor')
let applyBtn=document.querySelector('.applyBtn')

const changeColor=(color)=>{
    container.style.backgroundColor=color;
   
}



const handleApplyBtn=()=>{
    let color=inputColor.value;
    changeColor(color);
}
const handleRandomyBtn=()=>{
    console.log('random') 
}
randomBtn.addEventListener('click',handleRandomyBtn)
applyBtn.addEventListener('click',handleApplyBtn)