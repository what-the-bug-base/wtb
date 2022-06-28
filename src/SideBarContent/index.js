
import React from "react";
import "./style.css"
import { BrowserUpdatedOutlined,VideoCall,MessageOutlined,CodeOutlined,HomeOutlined,BookOnlineOutlined } from "@mui/icons-material";
export default function SideBarContent({slide,ide,classRoom,setClass,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){
    const selectide = ide ? "color":""
    const selectspace = space ? "color":""
    const selecttopics = topics ? "color":""
    const selectextra = extra ? "color" :""
    const selectclass = classRoom ? "color" :""
    const selecthome = !ide&&!space&&!topics&&!extra&&!classRoom?"color":""
    const slided = slide ?"slided":"" 
    const size  = slide?"large":"medium"
    return(
        <div className="sidebarcontent">
               <h4><span className={`sidebarcontent_hash`+selecthome} onClick={()=>{
                setTopics(false)
                setExtra(false)
                setClass(false)
                setSpace(false)
                setIDE(false)
                }}>
                <div className={`side-icons`+slided}>
                    <HomeOutlined fontSize={size}></HomeOutlined>
                    <p className={`text2`+slided}>Home</p>
                    </div></span></h4>
                    <h4><span className={`sidebarcontent_hash`+selectclass} onClick={()=>{setSpace(false)
            setTopics(false)
            setIDE(false)
            setClass(true)
            setExtra(false)
            }}>
             <div className={`side-icons`+slided}>
            <VideoCall fontSize={size}/>
                <p   className={`text2`+slided}>Class</p>
                </div></span></h4>
                
            <h4><span className={`sidebarcontent_hash`+selecttopics} onClick={()=>{
                setTopics(true)
                setExtra(false)
                setSpace(false)
                setClass(false)
                setIDE(false)
                }}>
                 <div className={`side-icons`+slided}>
                    <BookOnlineOutlined fontSize={size}/>
                    <p  className={`text2`+slided}>Topics</p>
                    </div></span></h4>
                    
            <h4><span className={`sidebarcontent_hash`+selectextra} onClick={()=>{
                setExtra(true)
                setTopics(false)
                setIDE(false)
                setClass(false)
                setSpace(false)
                }}>
                 <div className={`side-icons`+slided}>
                <BrowserUpdatedOutlined fontSize={size}/>
                    <p className={`text2`+slided}>Resources</p>
                    </div></span></h4>
            <h4><span className={`sidebarcontent_hash`+selectide} onClick={()=>{setIDE(true)
            setTopics(false)
            setExtra(false)
            setClass(false)
            setSpace(false)}}>
             <div className={`side-icons`+slided}>
                <CodeOutlined fontSize={size}/>
                <p   className={`text2`+slided}>Playground</p>
                </div></span></h4>
            <h4><span className={`sidebarcontent_hash`+selectspace} onClick={()=>{setSpace(true)
            setTopics(false)
            setIDE(false)
            setClass(false)
            setExtra(false)
            }}>
             <div className={`side-icons`+slided}>
            <MessageOutlined fontSize={size}/>
                <p   className={`text2`+slided}>Space</p>
                </div></span></h4>
              
             
        </div>
    )
}
