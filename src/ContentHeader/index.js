import {React,useState} from "react"
import "./styles.css"
import {Avatar} from "@mui/material";
import {Paper} from "@material-ui/core"
import {SettingsOutlined} from "@mui/icons-material";
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"
export default function ContentHeader(){
    const bar = {
        height : '13vh',
        width:"100%",
        
    }
   
    const user= useSelector(selectUser)
    console.log(user)

    return(
        <Paper elevation={10} style={bar}>
        <div className="content_header">
           
            <div className ="content_headerleft">
                <h3>
                  Test
                </h3>
            
            </div>
            <div className="content_headerright">
            <div className="sidebar_profile">
                    <Avatar src={user.photo}/>
                    <div className="sidaber_profileinfo">
                        <h3>{user.displayName}</h3>
                        <p>{user.uid.substring(0,5)}</p>
                        
                    </div>
                    <div className="sidebar_profileicons">
                        <SettingsOutlined className="sidebar_settings"/>
                    </div>

                </div>

            </div>
           
            
        </div>
        </Paper>
        
    )
}