const heading=document.getElementById("number")
console.log(heading);
var number = heading.innerHTML
const buttons= document.getElementsByClassName("btn")
const increase = buttons[0]
const decrease = buttons[1]
const overlay = document.getElementsByClassName("overlay")[0]
const message = document.getElementsByClassName("text")[0]
const close = document.getElementById("close_btn")

function increasehandler(){
    number=Number(number)
    if(number+1>10){
        message.innerHTML="Number can not go above 10"
        overlay.classList.remove("hidden")
        return
    }
    number=number+1
    heading.innerHTML = number
}

function decreasehandler(){
    number=Number(number)
    if(number-1<-10){
        message.innerHTML="Number can not go above -10"
        overlay.classList.remove("hidden")
        return
        
    }
    number=number-1
    heading.innerHTML = number
}
function closehandler(){
    overlay.classList.add("hidden")
}
    



increase.addEventListener("click",increasehandler)
decrease.addEventListener("click",decreasehandler)
close.addEventListener("click",closehandler)



