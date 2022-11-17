import React from "react"
import { NotificationsActiveRounded,Timer } from "@material-ui/icons"

export default function Reminder(){
    return(
        <div className="pending-report-cont">
        <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",}}>
            <p  style={{fontSize:14,fontWeight:'600',color:"gray"}}>Today</p>
            <p style={{fontSize:11,color:"gray"}}>9 Nov 2022</p>
            
        </div>
                <div className="analytics-icon-cont-ex">
                    <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                   
               <NotificationsActiveRounded style={{color:'rgb(122, 122, 243)',fontSize:19}}></NotificationsActiveRounded>

               <p style={{fontSize:13,fontWeight:"590",color:'rgb(122, 122, 243)'}}>Right now</p>                             
              
               </div>

           <div>
           <button style={{padding:7,borderColor:'gray',border:'none',borderRadius:15,color:'white',fontWeight:700,justifyContent:'center',backgroundColor:'rgb(122, 122, 243)',width:"120px",cursor:'pointer'}}>Join Class</button>
      
                </div></div>
<div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%"}}>        
<p style={{fontSize:13,fontWeight:'600'}}>&#8226; BMGT 214</p>
<div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"60px"}}>              
<Timer style={{fontSize:15,color:"gray"}}></Timer>
<p style={{fontSize:11,color:"gray"}}>4h 57m</p>
</div>
</div>
    
<p style={{fontSize:11,color:"gray"}}>17:00 - 23:00</p>



        
        </div>
    )
}