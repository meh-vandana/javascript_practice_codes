const bottom = document.getElementsByClassName("main-bottom")[0]
const equationH3 = document.getElementsByClassName("equationH3")[0]
const answer=document.getElementsByClassName("answerH5")[0]
const history = document.getElementsByClassName("do-something")[0]

const bottomHandler = (event) => {
    console.log(event);
    const currentCharacter = String(event.target.title)
    if(currentCharacter === "C"){
         equationH3.innerHTML=""
         return
    }
    if(currentCharacter ==="="){
       const res= eval(String(equationH3.innerHTML))
       answer.innerHTML=res
       history.innerHTML = equationH3.innerHTML


       return

        
    }

    
    const newString = String(equationH3.innerHTML) + currentCharacter
    equationH3.innerHTML = newString
   
}
bottom.addEventListener("click",bottomHandler)
















