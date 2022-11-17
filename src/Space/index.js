import React,{useState}from "react"
import "./styles.css"
import Spaceitem from "../Spaceitem"
import ContentHeader from "../ContentHeader"
import { AddOutlined, MoreVert, Send } from "@mui/icons-material"
import Sidebarprofile from "../Sidebarprofile"

export default function Space(setNotifications,notifications, sidebarprofile,setSidebarprofile){

 const spaces =[{id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"}]

 const data = spaces.map((item)=>{
    return(<Spaceitem key={item.id} item={item}/>)
 })
return(
    <div className="space-cont-outer">
        <div style={{backgroundColor:'rgb(122, 122, 243)',position:'absolute',bottom:"0px",height:"10px",left:'0px',width:"100%"}}></div>

        <ContentHeader  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} setNotifications={setNotifications}/>
        {sidebarprofile && <Sidebarprofile setSidebarprofile={setSidebarprofile}></Sidebarprofile> }           
        <div className="space-cont-inner">
                <div className="space-cont-nav">
                        <div className="space-cont1">
                        <p>Spaces</p>
                        </div>
                        <input className="search-space-input" type="text" placeholder="Search here.."></input>
                        <div className="space-cont-messenger">

</div>
                </div>
                <div className="space-cont-outer-chat">

<div className="space-cont-chat">
        <div className="space-chat-nav">
               

        </div>
        <div className="space-chat-msg-cont">
               

               </div>
        <div className="space-chat-bar">
                <input placeholder="Type your message" type="text" disabled></input>
                <Send style={{color:'rgb(122, 122, 243)',marginRight:"10px"}}></Send>
        </div>
        </div>

</div>
<div className="space-cont-outer-task">
<div className="space-cont-task">
        <div className="space-task-nav">
               <MoreVert style={{color:"rgb(102, 102, 102)"}}/>
                </div>
                <div className="space-task-details">
                        <p>--</p>
                        <div className="task-assigned">
                                <p className="new-task-title">Assigned</p>

                        </div>
                        <div className="task-timeline">
                                <p className="new-task-title">Timeline</p>
                                </div>
                                <div className="task-status">
                                        <p className="new-task-title">Status</p>
                                
                                </div>
                                <div className="task-inner-navbar">
                                        <p className="task-inner-titleselect">Tasks</p>
                                        <p className="task-inner-title">Activities</p>
                                        <p className="task-inner-title">Files</p>
                                        <p className="task-inner-title">Description</p>
                                </div>
                                
                
                </div>
                <div className="hr-line">
                        
                </div>
                <div className="tasks-cont-select">
<div className="new-task-btn">
        <AddOutlined></AddOutlined>
        <p>New Task</p>
</div>
        
</div>
             
</div>

</div>
</div>

        </div>
)
}