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
export default function Dashboard(){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [ide,setIDE] = useState(false)
    const [space,setSpace] = useState(false)
    const [extra,setExtra] = useState(false)
    const [topics,setTopics] = useState(false)


 

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
   {user?<div className="dash_container">
        
        <Sidebar ide={ide} setIDE={setIDE} topics={topics} setTopics={setTopics} space={space} setSpace={setSpace} extra={extra} setExtra={setExtra}/>
        {!ide&&!topics&&!extra&&!space&&<Content/>}
        {!ide&&!topics&&extra&&!space&&<Extra/>}
        {ide&&!topics&&!extra&&!space&&<IDE/>}


    </div>:<Login/>}
    </>

)
}