import {Avatar, Tooltip} from "@mui/material";
import { Edit } from "@mui/icons-material"
import React from "react"
import "./styles.css"
import {useDispatch,useSelector} from "react-redux" 
import {selectUser,login,logout} from "../features/userSlice"
export default function Sidebarprofile({setSidebarprofile,sidebarprofile}){
    const user = useSelector(selectUser)
    const slided = sidebarprofile?"slided":""
    
    return(
        <div className="sidebar-profile-cont">
            <div onClick={()=>{
                setSidebarprofile(false)}} className="add-cont-cont">

            </div>
            
<div className={"sidebar-profile-inner"+slided}>
   <div className="sidebar-top-dets">
   <div className="sidebar-top-dets-inner">
    <div className="sidebar-acounttype-dets">
<p style={{fontSize:"13px"}}>{user.accounttype}</p>
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
   
                                    <div className={{ display: "flex", width: "200px", height: 'auto', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
                    <p style={{fontSize:"13px"}}>Firstname</p>                  
    <input className="sidebar-input-bars" label="firstname" placeholder={user.firstname} fullWidth disabled/>
    </div>
    <div className={{ display: "flex", width: "200px", height: 'auto', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
                    <p style={{fontSize:"13px"}}>Lastname</p>                  
    <input  className="sidebar-input-bars" label="lastname" placeholder={user.lastname} fullWidth disabled/>
    </div>
    </div>
    <div className={{ display: "flex", width: "200px", height: 'auto', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
                    <p style={{fontSize:"13px"}}>Email</p>
    <input  className="sidebar-input-bars" label="Email" placeholder={user.email} fullWidth required disabled/>
    </div>
        

                               
</div>
</div>

        </div>
    )
}