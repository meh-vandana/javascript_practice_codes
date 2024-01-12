  
  
 const grid=document.getElementsByClassName("grid")[0] 
 console.log(grid);
  
  
  



const gridhandler =(event)=> {
    const division = document.getElementById(event.target.id)
    const cross = document.createElement("img")
    cross.src = "close.png"
    division.appendChild(cross)

    


}









grid.addEventListener("click",gridhandler)