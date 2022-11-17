import { NavigateNext,NavigateBefore, MarkChatRead } from "@mui/icons-material"
import React,{useState} from "react"
import NewUser from "../NewUser"
import "./style.css"

import {Button} from "@material-ui/core"
import { Image } from "@material-ui/icons"

export default function Onboarding(){
    const btnStyle = {
        marginTop:30,
        width:100,
    
       
        // marginBottom:20
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");

    const [box1,setBox1] =React.useState(true)
    const [box2,setBox2] = React.useState(false)
    const [box3,setBox3] = React.useState(false)
    const [accounttype,setAccountType] = React.useState(false)
    const [box4,setBox4] = React.useState(false)

    const [loader,setLoader] = React.useState(false);
    return(
        <div>
              <div className="talk-nav">
                <li className="plan-cont-img">
                <ul><img src="/icon-dev.png"/></ul> 
                 
                 
              
                 
                </li>
         </div>  
         {box1==true&&!box2&&!box3&&
         <div>
         
         <div style={{display:"flex",width:"95%",padding:10,margin:'auto',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <p style={{fontSize:14,fontWeight:'600',color:"gray",alignText:'center'}}>Get started</p>

            </div>
            <div className="box-cont">
           <div className="box-cont1"></div>
           <div className="box-cont2"></div>
            <div className="box-cont3"></div>
            <div className="box-cont4"></div>
            </div>
            {loader?<div style={{display:'flex', marginTop: "30px", marginBottom: "40px",maxWidth: "350px",margin:'auto',alignItems:'center',justifyContent:'center'}}><img style={{width:"50px",margin:'auto',height:"50px"}} src="./spinner.gif"></img></div>:
         
            <div className="onboard-cont1">

                 <p style={{fontSize:13,color:"#212222"}}>Please fill in your details</p>
                 
           
            
     
        
            <div className="next-btn" onClick={()=>{
             
                setLoader(!loader)
                setTimeout(()=>{
                    setLoader(loader=>!loader)},1500);
                    setBox1(false)
                    setBox2(true)
                    setBox3(false)
               setLoader(!loader)
                }}>
                <NavigateNext style={{fontWeight:'bold',fontSize:'30px',color:'white' }}></NavigateNext>
            </div>
        
            </div>
}
            </div>  }     
            {!box1&&box2==true&&!box3&&
         <div>
         
         <div style={{display:"flex",width:"95%",padding:10,margin:'auto',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <p style={{fontSize:14,fontWeight:'600',color:"gray",alignText:'center'}}>Get started</p>

            </div>
            <div className="box-cont">
           <div className="box-cont1"></div>
           <div className="btn102"></div>
            <div className="box-cont3 "></div>
            <div className="box-cont4"></div>
            </div>
            {loader?<div style={{display:'flex', marginTop: "30px", marginBottom: "40px",maxWidth: "350px",margin:'auto',alignItems:'center',justifyContent:'center'}}><img style={{width:"50px",margin:'auto',height:"50px"}} src="./spinner.gif"></img></div>:
         
            <div className="onboard-cont1">
          
         
     
        
            <div className="next-btn" onClick={()=>{
                setTimeout(()=>{
                    setLoader(loader=>!loader)},1500);
                    setBox1(false)
                    setBox2(false)
                    setBox3(true)
               setLoader(!loader)
             }}>
                <NavigateNext style={{fontWeight:'bold',fontSize:'30px',color:'white' }}></NavigateNext>
            </div>
            <div className="back-btn" onClick={()=>{
                  setTimeout(()=>{
                    setLoader(loader=>!loader)},1500);
                    setBox1(true)
                    setBox2(false)
                    setBox3(false)
               setLoader(!loader)
               }}>
                
                <NavigateBefore style={{fontWeight:'bold',fontSize:'30px',color:'white' }}></NavigateBefore>
            </div>
            </div>
}
            </div>  }         
            {!box1&&!box2&&box3==true&&
         <div>
         
         <div style={{display:"flex",width:"95%",padding:10,margin:'auto',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <p style={{fontSize:14,fontWeight:'600',color:"gray",alignText:'center'}}>Get started</p>

            </div>
            <div className="box-cont">
           <div className="box-cont1"></div>
           <div className="btn102"></div>
            <div className="btn103 "></div>
            <div className="box-cont4"></div>
            </div>
            {loader?<div style={{display:'flex', marginTop: "30px", marginBottom: "40px",maxWidth: "350px",margin:'auto',alignItems:'center',justifyContent:'center'}}><img style={{width:"50px",margin:'auto',height:"50px"}} src="./spinner.gif"></img></div>:
         
            <div className="onboard-cont1">
                 <p style={{fontSize:12,color:"#212222"}}>Complete sign-up</p>
          
         
          <div>
                
                </div>
            
     
        
            <div className="next-btn" onClick={()=>{
                  setTimeout(()=>{
                    setLoader(loader=>!loader)},1500);
                    setBox1(false)
                    setBox2(false)
                    setBox3(false)
                    setBox4(true)
               setLoader(!loader)
               }}>
                <NavigateNext style={{fontWeight:'bold',fontSize:'30px',color:'white' }}></NavigateNext>
            </div>
            <div className="back-btn" onClick={()=>{
                  setTimeout(()=>{
                    setLoader(loader=>!loader)},1500);
                    setBox1(false)
                setBox2(true)
                setBox3(false)
               setLoader(!loader)
               }}>
                
                <NavigateBefore style={{fontWeight:'bold',fontSize:'30px',color:'white' }}></NavigateBefore>
            </div>
            </div>
}
         
            </div>  }  
            {!box1&&!box2&&!box3&&box4&&
         <div>
         
         <div style={{display:"flex",width:"95%",padding:10,margin:'auto',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <p style={{fontSize:14,fontWeight:'600',color:"gray",alignText:'center'}}>Get started</p>

            </div>
            <div className="box-cont">
           <div className="box-cont1"></div>
           <div className="btn102"></div>
            <div className="btn103"></div>
            <div className="btn104"></div>
            </div>
            {loader?<div style={{display:'flex', marginTop: "30px", marginBottom: "40px",maxWidth: "350px",margin:'auto',alignItems:'center',justifyContent:'center'}}><img style={{width:"50px",margin:'auto',height:"50px"}} src="./spinner.gif"></img></div>:
         
            <div className="onboard-cont1">
                     <div className="completed-btn">
                <MarkChatRead  style={{fontWeight:'bold',fontSize:'30px',color:'white' }}/>
                         </div>
               <div style={{width:'100%',justifyContent:'center',alignContent:'center',alignItems:'center',display:'flex'}}>
            <p style={{fontSize:12,color:"#212222",margin:'auto',marginTop:'10px'}}>You'll be redirected in 10s</p>
          </div>
            <div>
             
                </div>
     
        
       
          
            </div>
}
         
            </div>  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        </div>
    )
}