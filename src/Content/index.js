import React from "react"
import "./style.css"
import ContentHeader from "../ContentHeader"
import { VideoCall,QuestionAnswer, AccountCircle,AccountTree, BookmarkAdd } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import GaugeChart from "react-gauge-chart";
import toast from "react-hot-toast"

export default function Content({setSlide}){
    /**<div onClick={()=>{
                    setSlide(true)}} className="join-mtng">

 <VideoCall></VideoCall>
 <p>join meeting</p>
                </div>

                <div  className="ask-qstn">
                    <QuestionAnswer></QuestionAnswer>
                    <p>ask question</p></div> */
    return(
        <div className="content">
             <ContentHeader/>
             <div className="content-btns">
    <div className="tasks-completed">
        <div className="canva-graph-report">
            
        </div>
    </div>

                    <div className="dash-points">
                <div className="dash-points-overall">
                    <p>Welcome!</p>
                
              <GaugeChart
                id="uv-gauge-chart"
                nrOfLevels={2}
                arcsLength={[6 / 20, (20 - 6) / 20]}
                colors={['rgb(13, 92, 128)', "#efefef"]}
                percent={6 / 20}
                arcPadding={0.02}
                cornerRadius={0}
                needleColor="transparent"
                needleBaseColor="transparent"
                hideText
              />
          
            <p>6 points</p>
                </div>
                <div className="dash-score-factors">
                    <p className="dash-score-title">Score factors</p>
                    <div className="dash-score-box1">
                    <Tooltip title="Answer questions from your moderator and earn points">
                    <div className="dash-quiz-points">
                        <h4>2</h4>
                        <p>quiz point(s)</p>
                    </div>
                    </Tooltip>
                    <Tooltip title="Engage with course material and earn points">
                    <div className="dash-engage-points">
                    <h4>4</h4>
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
             <div className="upcoming-sub">
                <p className="title-sub">Upcoming Lesson</p>
                <div className="upcoming-sub-inner">
                <div className="file-cont-sub">
                <BookmarkAdd/>
                </div>
                <div className="topic-cont-name">
                <p>Intro to Networking</p>
                </div>

                <div className="date-cont-time">
                <p>7:00 am</p>
                <p>12/05/2022</p>
                </div>
                <div className="rsvp-btn">
                    <button className="reminder-btn">
                        RSVP
                    </button>
                </div>
                </div>
             </div>
             </div>
          
           
        </div>
    )
}


