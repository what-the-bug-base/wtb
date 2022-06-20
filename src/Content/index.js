import React from "react"
import "./style.css"
import ContentHeader from "../ContentHeader"
import { VideoCall,QuestionAnswer, AccountCircle,AccountTree } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import GaugeChart from "react-gauge-chart";


export default function Content({setSlide}){
    return(
        <div className="content">
             <ContentHeader/>
             <div className="content-btns">
               
                <div onClick={()=>{
                    setSlide(true)}} className="join-mtng">

 <VideoCall></VideoCall>
 <p>join meeting</p>
                </div>

                <div  className="ask-qstn">
                    <QuestionAnswer></QuestionAnswer>
                    <p>ask question</p></div>
                    <div className="dash-points">
                <div className="dash-points-overall">
                    <p>Welcome!</p>
                
              <GaugeChart
                id="uv-gauge-chart"
                nrOfLevels={2}
                arcsLength={[12 / 20, (20 - 12) / 20]}
                colors={['rgb(13, 92, 128)', "#efefef"]}
                percent={12 / 20}
                arcPadding={0.02}
                cornerRadius={0}
                needleColor="transparent"
                needleBaseColor="transparent"
                hideText
              />
          
            <p>12 points</p>
                </div>
                <div className="dash-score-factors">
                    <p className="dash-score-title">Score factors</p>
                    <div className="dash-score-box1">
                    <Tooltip title="Answer questions from your moderator and earn points">
                    <div className="dash-quiz-points">
                        <h4>5</h4>
                        <p>quiz point(s)</p>
                    </div>
                    </Tooltip>
                    <Tooltip title="Engage with course material and earn points">
                    <div className="dash-engage-points">
                    <h4>7</h4>
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
               
                <div className="join-space">
                <AccountTree/>
                <p>create space</p>
                </div>
             </div>
          
           
        </div>
    )
}