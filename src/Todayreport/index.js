import React from "react"
import { AnalyticsRounded } from "@mui/icons-material"
export default function Todayreport(){
    return(
        <div className="pending-report-cont">
        <div className="analytics-icon-cont">
              <AnalyticsRounded style={{color:'rgb(122, 122, 243)',fontSize:19}}></AnalyticsRounded>

              <p style={{fontSize:13,fontWeight:"590",color:'rgb(122, 122, 243)'}}>Daily report</p>                             

               </div>

<p style={{fontSize:13}}>You have no pending events</p>
<p style={{fontSize:12,color:'grey'}}>Enjoy your day</p>

        </div>
    )
}