const heading=document.getElementById("number")
console.log(heading);
var number = heading.innerHTML
const buttons= document.getElementsByClassName("btn")
const increase = buttons[0]
const decrease = buttons[1]
const 

function increasehandler(){
    number=Number(number)
    if(number<10){
    number=number+1
    heading.innerHTML = number
    }

}
function decreasehandler(){
    number=Number(number)
    if(number>-10){
    number=number-1
    heading.innerHTML = number
    }

}
increase.addEventListener("click",increasehandler)
decrease.addEventListener("click",decreasehandler)



