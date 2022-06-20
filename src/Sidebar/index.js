import React from "react";
import "./styles.css"
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import { ComputerOutlined } from "@mui/icons-material";
import {auth} from "../firebase"

export default function Sidebar({ide,setIDE,space,setSpace,extra,setExtra,topics,setTopics}){

    
    return(
        <div className="sidebar">
            <div className="sidebar__top">
            
                <h3>EinsBoard</h3>
               
            </div>
            <div className="sidebar_content">
                <div className="sidebar_contentHeader">
                    <div className="sidebar_header">
                        <ExpandMore/>
                        <h4>Workspace</h4>
                    </div>
                    <Add className="sidebar_add"></Add>
                </div>
                <div className="sidebar_contentList">
                <SideBarContent ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
               
            </div>
            </div>
            <div className="sidebar_info">
        
                


            </div>
        </div>
    )
}