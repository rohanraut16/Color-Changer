let container=document.querySelector('.container')
let currentColorValue=document.querySelector('.currentColorValue')
let randomBtn=document.querySelector('.randomBtn')
let inputColor=document.querySelector('#inputColor')
let applyBtn=document.querySelector('.applyBtn')

const changeColor=(color)=>{
    container.style.backgroundColor=color;
    currentColorValue.innerText=color;
}

let colorArray=["red","green","blue","tomato","white","black","beige","aqua","azure","brown","#f4f4f4"];

const generateRandomColor=()=>{
    let randomNumber=Math.floor(Math.random()*colorArray.length);
    return colorArray[randomNumber]
}

const handleApplyBtn=()=>{
    let color=inputColor.value;
    changeColor(color);
}
const handleRandomyBtn=()=>{
 let color= generateRandomColor();
   changeColor(color)
}
randomBtn.addEventListener('click',handleRandomyBtn)
applyBtn.addEventListener('click',handleApplyBtn)