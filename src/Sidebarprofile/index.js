import {Avatar, Tooltip} from "@mui/material";
import { Edit } from "@mui/icons-material"
import React from "react"
import "./styles.css"
import {useDispatch,useSelector} from "react-redux" 
import {selectUser,login,logout} from "../features/userSlice"
export default function Sidebarprofile({setSidebarprofile,setSidebar}){
    const user = useSelector(selectUser)
    return(
        <div className="sidebar-profile-cont">
            <div onClick={()=>{
                setSidebarprofile(false)}} className="add-cont-cont">

            </div>
            
<div className="sidebar-profile-inner">
   <div className="sidebar-top-dets">
   <div className="sidebar-top-dets-inner">
    <div className="sidebar-acounttype-dets">
<p>{user.accounttype}</p>
    </div>
    <Avatar sizes="medium"></Avatar>
    <div className="edit-icon-cont">
        <Tooltip title="Edit profile">
        <Edit style={{fontSize:"17px"}}></Edit>
        </Tooltip>

    </div>
    </div>
    </div>
    <div className="sidebar-profile-input-bar">
    <div className="sidebar-first-second-name">
    <input label="firstname" placeholder={user.firstname} fullWidth disabled/>
    <input label="lastname" placeholder={user.lastname} fullWidth disabled/>
    </div>
    <input  label="Email" placeholder={user.email} fullWidth required disabled/>
    
        

                               
</div>
</div>

        </div>
    )
}