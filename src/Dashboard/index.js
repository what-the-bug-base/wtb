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
import Topics from "../Topics"
import Analytics from "../Analytics"
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
    const user1 = localStorage.getItem("token") 
    const [notifications,setNotifications] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch(login({
                    uid:authUser.uid,
                    photo:authUser.photoURL,
                    email:authUser.email,
                    displayName : authUser.displayName
                }))
            }
            else{
                dispatch(logout())
                
            }
        })
      }, [dispatch]);

    return(
        <>
   {user||user1?<div className="dash_container">
        
        <Sidebar slide={slide} analytics={analytics} setAnalytics={setAnalytics} setSlide={setSlide} classRoom={classRoom} setClass={setClass} ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
        
        {!analytics&&!ide&&!topics&&!extra&&!space&&!classRoom&&<Content notifications={notifications} setNotifications={setNotifications} setSlide={setSlide}/>}
        {!analytics&&!ide&&!topics&&extra&&!space&&!classRoom&&<Extra notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&ide&&!topics&&!extra&&!space&&!classRoom&&<IDE notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&!ide&&!topics&&!extra&&space&&!classRoom&&<Space notifications={notifications} setNotifications={setNotifications}/>}
        {!analytics&&!ide&&topics&&!extra&&!space&&!classRoom&&<Topics notifications={notifications} setNotifications={setNotifications}/>}
        {analytics&&!ide&&!topics&&!extra&&!space&&!classRoom&&<Analytics notifications={notifications} setNotifications={setNotifications}/>}
        


    </div>:<Login/>}
    </>

)
}
