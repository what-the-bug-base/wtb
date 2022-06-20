import React from "react"
import "./style.css"
import ContentHeader from "../ContentHeader"
import { VideoCall,QuestionAnswer } from "@mui/icons-material"
import { Tooltip } from "@mui/material"

export default function Content(){
    return(
        <div className="content">
             <ContentHeader/>
             <div className="content-btns">
               
                <div className="join-mtng">

 <VideoCall></VideoCall>
 <p>join meeting</p>
                </div>

                <div  className="ask-qstn">
                    <QuestionAnswer></QuestionAnswer>
                    <p>ask question</p></div>
                    <div className="dash-points">
                <div className="dash-points-overall">
                    <p>Welcome!</p>
                    <h3>0</h3>
                    <p>points</p>
                </div>
                <div className="dash-score-factors">
                    <p className="dash-score-title">Score factors</p>
                    <div className="dash-score-box1">
                    <Tooltip title="Answer questions from your moderator and earn points">
                    <div className="dash-quiz-points">
                        <h4>O</h4>
                        <p>quiz anwsered</p>
                    </div>
                    </Tooltip>
                    <Tooltip title="Engage with course material and earn points">
                    <div className="dash-engage-points">
                    <h4>O</h4>
                   <p>engagement</p>
                    </div>
                    </Tooltip>
                    </div>
                    <div className="dash-score-box2">
                    <div className=""></div>
                    <div className=""></div>
                    </div>
                </div>
            </div>
             </div>
             <div className="bottom-btns">
                <button className="join-space">create space</button>
             </div>
          
           
        </div>
    )
}