import React,{useState} from "react";
import "./styles.css"
import { ExpandMore,ExpandLess, Expand, CloseOutlined, MenuOutlined, Logout } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined, } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import { ComputerOutlined } from "@mui/icons-material";
import {auth} from "../firebase"
import { Tooltip } from "@mui/material";

export default function Sidebar({analytics,setAnalytics,setSlide,classRoom,setClass,slide,ide,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){
    const [active,setActive] = useState(false)
    const lower = active ? "lowered":""
    const slided = slide ?"slided":"" 
    return(
        <div className={`sidebar`+slided}>
            <div className="sidebar__top">
           
                <div className="menu-icon" >
                {slide?
                <MenuOutlined fontSize="small" onClick={()=>{setSlide(false)}}/>:   <CloseOutlined className={`NAME`+slided} onClick={()=>{setSlide(true)}}></CloseOutlined>
            }
            </div>
            </div>
            <div className="sidebar_content">
                <div className={`sidebar_contentList`+lower}>
                <SideBarContent analytics={analytics} setAnalytics={setAnalytics} slide={slide} classRoom={classRoom} setClass={setClass} active={active} ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
               
            </div>
            </div> 
        </div>
    )
}
