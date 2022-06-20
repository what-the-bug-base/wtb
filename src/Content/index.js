import React from "react"
import "./style.css"
import ContentHeader from "../ContentHeader"
import { VideoCall,QuestionAnswer } from "@mui/icons-material"

export default function Content(){
    return(
        <div className="content">
             <ContentHeader/>
             <div className="content-btns">
               
                <div className="join-mtng">

 <VideoCall></VideoCall>
 <p>join meeting</p>
                </div>

                <div className="ask-qstn">
                    <QuestionAnswer></QuestionAnswer>
                    <p>ask question</p></div>

             </div>
             <div className="bottom-btns">
                <button className="join-space">create space</button>
             </div>
            
           
        </div>
    )
}