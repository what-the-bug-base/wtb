import React from "react";
import "./styles.css"
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import SideBarContent from "../SideBarContent"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";
import { ComputerOutlined } from "@mui/icons-material";
import {auth} from "../firebase"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__top">
            
                <h3>Talk Python</h3>
                <ExpandMore/>
            </div>
            <div className="sidebar_content">
                <div className="sidebar_contentHeader">
                    <div className="sidebar_header">
                        <ExpandMore/>
                        <h4>Intro to Python</h4>
                    </div>
                    <Add className="sidebar_add"></Add>
                </div>
                <div className="sidebar_contentList">
                <SideBarContent/>
               
            </div>
            </div>
            <div className="sidebar_info">
            <ComputerOutlined className="sidebar_infoicon"/>
                <div className="sidebar_contentinfo">
                    <p>python 3.10</p>
               
                </div>
                <div className="sidebar_infoicons">
                    <InfoOutlined onClick={()=>{
                        auth.signOut()
                    }}/>
                    <MessageOutlined/>


                </div>
                


            </div>
        </div>
    )
}