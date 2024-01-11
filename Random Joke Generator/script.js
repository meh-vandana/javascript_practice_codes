const jokegenerator =document.getElementsByClassName("joke-gen")[0]
const joke = document.getElementsByClassName("Joke")[0]
const url="https://api.api-ninjas.com/v1/dadjokes?limit=1"

const API_KEY="GnhTvSRMDshKze9xnvDN4A==Ttg0TW9IxVp3sgwi"


const payload = {
    "method":"GET",
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key":API_KEY
    }
}

const jokeHandler=()=>{
    fetch(url,payload)
    .then(response => response.json())
    .then(data => {
        joke.innerHTML=data[0].joke
    })
    

}










jokegenerator.addEventListener("click",jokeHandler)