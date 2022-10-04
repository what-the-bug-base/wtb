import React from "react"
import "./styles.css"
import ContentHeader from "../ContentHeader"
import { MoreVertOutlined, UploadFileOutlined } from "@mui/icons-material"

export default function Extra(setNotifications){
    return(
        <div className="extra-cont">
            <ContentHeader setNotifications={setNotifications}/>
<div className="extra-cont-inner">
  

    <div className="extra-resources-cont">
    <div className="extra-resources-nav-outer">
   <div className="extra-resources-nav">
                             <p>Name</p>
                            <p>Time Uploaded</p>
                            <p>Type</p>
                            <p>Settings</p>
                           

                       
                       </div>
   </div>
     <div className="add-btn001">
        <div className="add-cnt-info">
    
        </div>
     </div>
    </div>
</div>
            </div>
    )
}