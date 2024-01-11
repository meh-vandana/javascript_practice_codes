const alllinks = document.getElementsByClassName("links")
console.log(alllinks)

const contentholder=document.getElementsByClassName("contentholder")[0]
console.log(contentholder)


const home= alllinks[0].children[0]
home.classList.add("active")

const gift= alllinks[0].children[1]
const order= alllinks[0].children[2]
const pay= alllinks[0].children[3]
const store= alllinks[0].children[4]



console.log(home)
console.log(order)
console.log(gift)
console.log(pay)
console.log(store)


const clickhandler = (event)=>{
    console.log(event);
    if(event.target.text == "Home"){
        home.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Gift"){
        gift.classList.add("active")
        home.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
        fetch("starbucksgift/index.html")
        .then(response => response.text())
        .then(data =>
            contentholder.innerHTML = data
        )
    }
    if(event.target.text == "Order"){
        order.classList.add("active")
        gift.classList.remove("active")
        home.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Pay"){
        pay.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        home.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Store"){
        store.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        home.classList.remove("active")
    }
}


home.addEventListener("click",clickhandler)
gift.addEventListener("click",clickhandler)
order.addEventListener("click",clickhandler)
pay.addEventListener("click",clickhandler)
store.addEventListener("click",clickhandler)
