import React from "react"
import "./styles.css"
import {Menu} from "@mui/icons-material"
import ContentHeader from "../ContentHeader"
import Sidebarprofile from "../Sidebarprofile"

export default function Topics( sidebarprofile,setSidebarprofile){
    return(
        <div className="topics-cont">
        <ContentHeader  sidebarprofile={sidebarprofile} setSidebarprofile={setSidebarprofile}/>
        {sidebarprofile && <Sidebarprofile setSidebarprofile={setSidebarprofile}></Sidebarprofile> }           
        <div style={{display:"flex",width:"100%",height:"45px",alignItems:'center',padding:10,justifyContent:'center'}}>
                <input style={{width:"40%",padding:"3px",borderRadius:"15px",boxShadow:'rgba(10, 10, 10, 0.2) 0px 2px 8px 0px',border:"none",height:"40px"}} placeholder="Install 3rd Party Apps" >

    </input>
    <Menu style={{marginLeft:"10px"}}></Menu>

            </div>
        <div style={{backgroundColor:'rgb(122, 122, 243)',position:'absolute',bottom:"0px",height:"10px",left:'0px',width:"100%"}}></div>

        <div className="apps-cont">
            <div className="app-cont">
                <img style={{"width":"70px","height":"70px"}}src="/assets/github.svg">

                </img>
                <div className="app-inner-cont">
                    <button className="add-rmv-btn">
                        add
                    </button>
                    <p className="description-cont">
                        Github
                        </p>
                </div>
            </div>
            <div className="app-cont">
                <img style={{"width":"70px","height":"70px"}}src="/assets/google.svg">

                </img>
                <div className="app-inner-cont">
                    <button className="add-rmv-btn">
                        add
                    </button>
                    <p className="description-cont">
                        Google
                        </p>
                </div>
            </div>
        </div>
       
    
        </div>
    )
}
