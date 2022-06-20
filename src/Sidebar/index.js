import React,{useState} from "react";
import "./styles.css"
import { ExpandMore,ExpandLess, Expand } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import { ComputerOutlined } from "@mui/icons-material";
import {auth} from "../firebase"
import { Tooltip } from "@mui/material";

export default function Sidebar({slide,ide,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){
    const [active,setActive] = useState(false)
    const lower = active ? "lowered":""
    const slided = slide ?"slided":"" 
    return(
        <div className={`sidebar`+slided}>
            <div className="sidebar__top">
            
                <h3 >EinsBoard</h3>
               
            </div>
            <div className="sidebar_content">
                <div className="sidebar_contentHeader">
                    <div className="sidebar_header">
                    {lower ? <ExpandLess onClick={()=>{
                            setActive(false)
                        }}/> :
                        <ExpandMore onClick={()=>{
                            setActive(true)
                        }}/>}
                        <h4 className={`text`+slided} onClick={()=>{
                            setActive(true)}}>Workspace</h4>
                    </div>
                    <Tooltip title="Add Markdown">
                    <Add className="sidebar_add"></Add>
                    </Tooltip>
                </div>
                <div className={`sidebar_contentList`+lower}>
                <SideBarContent slide={slide} active={active} ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
               
            </div>
            </div>
            <div className="sidebar_info">
        
                


            </div>
        </div>
    )
}