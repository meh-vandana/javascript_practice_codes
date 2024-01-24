import React, { useRef } from "react";
import Flexcom from "../components/Flexcom";
import'./homepage.css'
import  logo from '../assets/netflix.png'
import Accordian from "../components/Accordian";
import tv from '../assets/tv.png'
const flexbox = [
    {
        heading:"Enjoy on your TV",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        img:tv,
    },
    {
        heading:"Download your shows to watch offline",
        para:"Save your favourites easily and always have something to watch.",
        img:tv
        },
    {
        heading:"Watch everywhere",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and moreStream unlimited movies and TV shows on your phone, tablet, laptop, and TV..",
        img:tv
    },
    {
        heading:"Create profiles for kids",
        para:"Send children on adventures with their favourite characters in a space made just for them—free with your membership.Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        img:tv
    }
]



const HomePage=()=>{
    const emailref=useRef()
    const ClickHandler=(e)=>{
        e.preventDefault()
        var username=emailref.current.value
        console.log(username)
        emailref.current.value=""

    }
    return(
        <div className="main">
        <div className="homepage">

        <div className="ctn1">
            <div className="homepagetop">
                <img src={logo} alt="" className="logo" />
                <select name="" id="" className="options">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    
                </select>
                <button className="btn">Sign in</button>
            </div>
            <div className="homepagebottom">
                <h1 className="heading1">Unlimited movies, TV shows and more</h1>
                <h3 className="heading2">Watch anywhere. Cancel anytime.</h3>
                <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="input">
                    <input type="email" placeholder="Enter email to get started" className="email" ref={emailref}/>
                    <button type="sumbit" className="getstarted" onClick={ClickHandler}>Get Started</button>

                </form>
            </div>
        </div>
        {
            flexbox.map(data=><Flexcom data={data}/>)
        }

        
        <Accordian/>
       
        </div>
        </div>
        
    )
}
export default HomePage