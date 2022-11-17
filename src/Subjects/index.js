import React from "react"
import { School } from "@mui/icons-material"
export default function Subjects({item,setClassbtn}){

    const enterClass =()=>{
        setClassbtn(true)
        
    }
    return(
        <div className="class-cont-subject">
                <div className="class-title-cont">
                <div className="class-cont-icon">
                <School style={{color:'white',fontSize:'17px'}}></School>
              
                </div>
                <p style={{fontSize:13,fontWeight:'600',color:"rgb(122, 122, 243)",marginLeft:"10px"}}>{item.name}</p>
                </div>
              <div style={{width:'100%',justifyContent:'space-between',flexDirection:'row',alignItems:'center',display:'flex',}}>
                <div>
                <p style={{fontSize:13,color:"gray",marginLeft:"10px"}}>Next class</p>
                <p style={{fontSize:13,fontWeight:'600',color:"#212222",marginLeft:"10px"}}>{item.day +" "+ item.time}</p>
               </div>
               <button onClick={()=>{
                enterClass()}
                } style={{padding:7,borderColor:'gray',border:'none',borderRadius:15,color:'white',fontWeight:700,justifyContent:'center',backgroundColor:'rgb(122, 122, 243)',width:"120px",cursor:'pointer'}}>Join Class</button>
          

               </div>
               
            </div>
    )
}