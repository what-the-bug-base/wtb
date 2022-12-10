import { LocalLibrarySharp, School, Subject } from "@mui/icons-material";
import React, { useState,useEffect } from "react"
import Class from "../Class";
import "./style.css"
import ContentHeader from "../ContentHeader"
import {io} from "socket.io-client"
import Subjects from "../Subjects"
import Sidebarprofile from "../Sidebarprofile";

export default function Classrooms( {sidebarprofile,setSidebarprofile}){
  const socket = io("https://localhost:3000")
    const [classbtn,setClassbtn] =React.useState(false)
    const [classRoomName,setClassRoomName] = React.useState("")
    const [classRoomId,setClassRoomId] = React.useState('') 
    const [subjectsData,setSubjectsData] = React.useState([]) //from API
    const [me, setMe] = useState("");//id of client-side
    const [userRole,setUserRole] = React.useState("")
    const [attendant,setAttendantName] = React.useState("")
    //const subjectsData = [{name:'BGMT 214',time:"12:44",day:'Wednesday'},{name:'COMP 214',time:"12:44",day:'Friday'}]
console.log(sidebarprofile)
   
    useEffect(()=>{
      socket.on("me",(id)=>{
        setMe(id)
      })
    setAttendantName("David");

     setClassRoomId("1234black"); 
     setSubjectsData([{name:'BGMT 214',time:"12:44",day:'Wednesday'},{name:'COMP 214',time:"12:44",day:'Friday'},{name:'BGMT 214',time:"12:44",day:'Wednesday'},{name:'COMP 234',time:"18:44",day:'Saturday'}])
     setClassRoomName("BMGT 214")
     setUserRole("student")

     
     socket.emit('join-class',{attendant,classRoomId})
    },[])

    return(
<div className="Classes-cont">
    {classbtn==false?
        <div >
        <ContentHeader  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile}></ContentHeader>
        {sidebarprofile ==true && <Sidebarprofile sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile}></Sidebarprofile> }           
        <div style={{display:"flex",width:"95%",padding:7}}>
                <p style={{fontSize:14,fontWeight:'600',color:"gray"}}>Classrooms</p>

            </div>
            {userRole=="student" &&
        <div className="class-cont-subjects">

            {subjectsData.map((item,key)=>(
              <Subjects item={item} key={key} setClassRoomName={setClassRoomName} classRoomId={classRoomId} setClassbtn={setClassbtn}></Subjects>
            ))}
               
            
        
        
            </div>}
            {userRole=="instructor" &&
        <div className="class-cont-subjects">

            {subjectsData.map((item,key)=>{
              <Subjects item={item} key={key} setClassRoomId={setClassRoomId} setClassbtn={setClassbtn}></Subjects>
            })}
               
            
        
        
            </div>}
    </div>:
    <Class userRole={userRole} me={me} setClassbtn={setClassbtn}  classRoomName={classRoomName} classRoomId={classRoomId} socket={socket}></Class>
}
</div>

    )
}