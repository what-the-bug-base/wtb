
import React from "react";
import "./style.css"
import { BrowserUpdatedOutlined,MessageOutlined,CodeOutlined,HomeOutlined,BookOnlineOutlined } from "@mui/icons-material";
export default function SideBarContent({slide,ide,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){
    const selectide = ide ? "color":""
    const selectspace = space ? "color":""
    const selecttopics = topics ? "color":""
    const selectextra = extra ? "color" :""
    const selecthome = !ide&&!space&&!topics&&!extra?"color":""
    const slided = slide ?"slided":"" 
    return(
        <div className="sidebarcontent">
               <h4><span className={`sidebarcontent_hash`+selecthome} onClick={()=>{
                setTopics(false)
                setExtra(false)
                setSpace(false)
                setIDE(false)
                }}>
                    <HomeOutlined></HomeOutlined>
                    <p className={`text2`+slided}>Home</p></span></h4>
           
            <h4><span className={`sidebarcontent_hash`+selecttopics} onClick={()=>{
                setTopics(true)
                setExtra(false)
                setSpace(false)
                setIDE(false)
                }}>
                    <BookOnlineOutlined/>
                    <p  className={`text2`+slided}>Topics</p></span></h4>
            <h4><span className={`sidebarcontent_hash`+selectextra} onClick={()=>{
                setExtra(true)
                setTopics(false)
                setIDE(false)
                setSpace(false)
                }}><BrowserUpdatedOutlined/>
                    <p className={`text2`+slided}>Resources</p></span></h4>
            <h4><span className={`sidebarcontent_hash`+selectide} onClick={()=>{setIDE(true)
            setTopics(false)
            setExtra(false)
            setSpace(false)}}>
                <CodeOutlined/>
                <p   className={`text2`+slided}>Playground</p></span></h4>
            <h4><span className={`sidebarcontent_hash`+selectspace} onClick={()=>{setSpace(true)
            setTopics(false)
            setIDE(false)
            setExtra(false)
            }}><MessageOutlined/>
                <p   className={`text2`+slided}>Space</p></span></h4>
              
             
        </div>
    )
}