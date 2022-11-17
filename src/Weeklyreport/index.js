import React from "react";
import { AnalyticsRounded } from "@mui/icons-material"

export default function Weeklyreport(){
    return(
        <div className="weekly-report-cont">
        <div className="analytics-icon-cont">
       <AnalyticsRounded style={{color:'rgb(122, 122, 243)',fontSize:19}}></AnalyticsRounded>

       <p style={{fontSize:13,fontWeight:"590",color:'rgb(122, 122, 243)'}}>Weekly report</p>                             

        </div>

<p style={{fontSize:13}}>You have no upcoming events</p>
<p style={{fontSize:12,color:'grey'}}>Enjoy your week</p>

</div>

    )
}