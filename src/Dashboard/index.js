import React, { useEffect,useState } from "react"
import "./style.css"
import Sidebar from "../Sidebar"
import Content from "../Content"
import {auth} from "../firebase"
import Login from "../Login"
import {useAuthState} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom" 
import {useDispatch,useSelector} from "react-redux" 
import {selectUser,login,logout} from "../features/userSlice"
import Extra from "../Extra"
import IDE from "../IDE"
import Space from "../Space"
import toast from "react-hot-toast"
import Topics from "../Topics"
import Analytics from "../Analytics"
import Class from "../Class"
import {useParams} from "react-router-dom"
import Classrooms from "../Classrooms"
import axios from "axios"
export default function Dashboard(){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [ide,setIDE] = useState(false)
    const [space,setSpace] = useState(false)
    const [extra,setExtra] = useState(false)
    const [topics,setTopics] = useState(false)
    const [slide,setSlide] = useState(true)
    const [classRoom,setClass] = useState(false)
    const [analytics,setAnalytics] = useState(false)
    const token = localStorage.getItem("token")
    const [notifications,setNotifications] = useState(false)
    const {id} = useParams()
    const [sidebarprofile,setSidebarprofile] = useState(false)
    const [workspacedata,setWorkspacedata] =  React.useState([])
    const [loader,setLoader] = React.useState(true)
    
   
    const config ={
        headers:{"x-auth-token":token}
    }
    useEffect(() => {
            const data = ""
            if(token){
                const url = "http://localhost:5000/users/api/v1/auth/userdetails"
                axios.get(url,config).then((res)=>{
                    dispatch(login({
                        photo:"",
                        email:res.data.email,
                        firstname : res.data.firstname,
                        lastname:res.data.lastname,
                        accounttype:res.data.accounttype,
                        workspaceURL:id

                    }))
                }).catch((err)=>
                console.log(err))
console.log(user)
                if(id){
                    const url = `http://localhost:5000/workspaces/api/v1/ws/${id}`
                    axios.get(url,config).then((res)=>{
                       if(res.status==201){
                        setWorkspacedata(res.data)
                        setTimeout(()=>{
                            setLoader(false)
                        },10000)
        
                       } 
                        else if(res.status==403){
                            toast.error("Forbidden.You are not authorized")
                            window.location="/"
                            
                        }
                        else if(res.status==404){ 
                            toast.error("Workspace does not exist")
                            window.location="/"
                          
                    
                        }else{
                            toast.error("Internal Server Error")
                          
                        }
        
                    
                    }).catch((err)=>
                   toast.error("Internal Server Error"))
                    
                    
                  
                }
                else{
                      toast.error("Internal Server Error")
                }
                 
                
                
                
                
              
            }
            else{
                dispatch(logout())
                
            }
      }, [dispatch]);

    return(
        <>
   {user&&token?<div className="dash_container">
   {loader?<div style={{display:'flex',height:"100vh", marginTop: "30px",marginBottom: "40px",maxWidth: "350px",margin:'auto',alignItems:'center',justifyContent:'center'}}><img style={{width:"50px",margin:'auto',height:"50px"}} src="/blockspinner.svg"></img></div>:
         <>
        
        <Sidebar slide={slide} analytics={analytics} setAnalytics={setAnalytics} setSlide={setSlide} classRoom={classRoom} setClass={setClass} ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
        
        {!analytics&&!ide&&!topics&&!extra&&!space&&!classRoom&&<Content sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications} setSlide={setSlide}/>}
        {!analytics&&!ide&&!topics&&extra&&!space&&!classRoom&&<Extra  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&ide&&!topics&&!extra&&!space&&!classRoom&&<IDE   sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&!ide&&!topics&&!extra&&space&&!classRoom&&<Space  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&!ide&&topics&&!extra&&!space&&!classRoom&&<Topics  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        {analytics&&!ide&&!topics&&!extra&&!space&&!classRoom&&<Analytics  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&!ide&&!topics&&!extra&&!space&&classRoom&&<Classrooms  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile} notifications={notifications} setNotifications={setNotifications}/>}
        
</>}

    </div>:<Login/>}
    </>

)
}
