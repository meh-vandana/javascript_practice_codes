import React from "react";
import './component.css'
 

const Flexcom=(props)=>{
    console.log(props)
    return(
        <div className="component">
        <div className="line"></div>
        <div className="ctn2">
            <div className="left">
                <h2 className="f-heading">{props.data.heading}</h2>
                <p className="f-para">{props.data.para}</p>
            </div>
            <div className="right">
                <img src={props.data.img}/>
            </div>
        </div>
        </div>
    )
    
}
export default Flexcom