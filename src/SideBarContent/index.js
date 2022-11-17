
import React from "react";
import "./style.css"
import Tooltip from '@mui/material/Tooltip';
import { BrowserUpdatedOutlined,Analytics,Videocam,Chair,VideoCall,MessageOutlined,CodeOutlined,HomeOutlined,BookOnlineOutlined } from "@mui/icons-material";
export default function SideBarContent({slide,ide,analytics,setAnalytics,classRoom,setClass,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){
    const selectide = ide ? "color":""
    const selectspace = space ? "color":""
    const selecttopics = topics ? "color":""
    const selectextra = extra ? "color" :""
    const selectclass = classRoom ? "color" :""
    const selectanalytics = analytics ? "color" :""
    const selecthome = !analytics&&!ide&&!space&&!topics&&!extra&&!classRoom?"color":""
    const slided = slide ?"slided":"" 
    const size  = slide?"large":"medium"
    return(
        <div className="sidebarcontent">
               <h4><span className={`sidebarcontent_hash`+selecthome} onClick={()=>{
                setTopics(false)
                setExtra(false)
                setClass(false)
                setAnalytics(false)
                setSpace(false)
                setIDE(false)
                }}>
                <div className={`side-icons`+slided}>
                    <Tooltip title="Home">
                    <HomeOutlined fontSize={size}></HomeOutlined>
                    </Tooltip>
                    <p className={`text2`+slided}>Home</p>
                    </div></span></h4>
                    <h4><span className={`sidebarcontent_hash`+selectclass} onClick={()=>{setSpace(false)
            setTopics(false)
            setAnalytics(false)
            setIDE(false)
            setClass(true)
            setExtra(false)
            }}>
             <div className={`side-icons`+slided}>
                <Tooltip title="Class">
            <Videocam fontSize={size}/>
            </Tooltip>
                <p   className={`text2`+slided}>Class</p>
                </div></span></h4>
                
            <h4><span className={`sidebarcontent_hash`+selecttopics} onClick={()=>{
                setTopics(true)
                setExtra(false)
                setSpace(false)
                setAnalytics(false)

                setClass(false)
                setIDE(false)
                }}>
                 <div className={`side-icons`+slided}>
                 <Tooltip title="Apps">
                    <BookOnlineOutlined fontSize={size}/>
                    </Tooltip>
                    <p  className={`text2`+slided}>Apps</p>
                    </div></span></h4>
                    
           
  
            <h4><span className={`sidebarcontent_hash`+selectspace} onClick={()=>{setSpace(true)
            setTopics(false)
            setIDE(false)
            setClass(false)
            setAnalytics(false)

            setExtra(false)
            }}>
             <div className={`side-icons`+slided}>
                <Tooltip title="Space">
            <MessageOutlined fontSize={size}/>
            </Tooltip>
                <p   className={`text2`+slided}>Space</p>
                </div></span></h4>
                <h4><span className={`sidebarcontent_hash`+selectanalytics} onClick={()=>{
                setExtra(false)
                setAnalytics(true)
                setTopics(false)
                setIDE(false)
                setClass(false)
                setSpace(false)
                }}>
                 <div className={`side-icons`+slided}>
                    <Tooltip title="Class Report">
                <Analytics fontSize={size}/>
                </Tooltip>
                    <p className={`text2`+slided}>Report</p>
                    </div></span></h4>
              
             
        </div>
    )
}
