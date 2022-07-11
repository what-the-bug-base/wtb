import React,{useState,useEffect}from "react"
import "./styles.css"

export default function Spaceitem(props){
    


return(
    <div className="space-item-cont-outer">
        <div className="space-item-cont">
        <img src={"/"+props.item.img}></img>
        <p>{props.item.name}</p>
        </div>
        <p className="space-last-msg-timestamp">{props.item.timestamp}</p>
        

        </div>
)
}