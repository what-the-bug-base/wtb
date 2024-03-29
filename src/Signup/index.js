import {React,useState,useEffect} from "react"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {registerWithEmailAndPassword} from "../firebase"
import { CheckBoxOutlined } from "@mui/icons-material";
import Menuicon from "../Menuicon"
export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [loader,setLoader] = useState(false);
    const [regNo, setRegNo] = useState("");
    const [accounttype,setAccountType] = useState("Teacher")
   


    const login ={
        marginTop:20
    }
    const paperStyle = {
        padding:20,
        height:'70vh',
        width:350,
        margin:'auto',
        marginTop:50
      
    }
    const ggStyle ={
        marginBottom:20
        
    }
    const btnStyle = {
        marginTop:20,
    
    }
/**     <div className="customBtn" onClick={signInWithGoogle}>
      <span className="icon"></span>
      <span className="buttonText">Sign-up with Google</span>
    </div> */
return(
    <div>
                 <div className="talk-nav">
                <li className="plan-cont-img">
                <ul><img src="/icon-dev.png"/></ul> 
                 
                 
              
                 
                </li>
         </div>
                           {loader==true?<div className="login-image-cont">
    <img src="/dev-icon.gif"/></div>:
       <div classname="login-cont-1">
         <div className="login-container">
    <Grid className="login-cont">
       
       
        <Grid className="main-icons" align="center">
            <img className="main-icon"src="/icon-dev.png"/>  
            <h2>EinsBoard</h2>
       
        </Grid>
   
    <div className="login-input-bar">
        <div className="login-first-second-name">
    <input label="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder="Enter First Name" fullWidth required/>
    <input label="secondname" onChange={(e) => setSecondname(e.target.value)} value={secondname} placeholder="Enter Last Name" fullWidth required/>
    </div>
  
         
        <input  label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" fullWidth required/>
        <input  label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>
   
     </div>
     <div style={{marginTop:"20px"}}>
     <p style={{fontSize:13,color:"#212222"}}>Please choose account type</p>
            <select  defaultValue={accounttype} onChange={(e)=>{setAccountType(e.target.value)}} className="account-activity">
                 <option value="Teacher">Teacher</option>
                            <option value="Organisation" disabled>Organisation</option>
                            <option value="Student">Student</option>
                        </select>
                        </div>
        <Button style={btnStyle}  onClick={() => {
              setLoader(!loader)
              setTimeout(()=>{
                  setLoader(loader=>!loader)},2600);
                console.log(accounttype)
                  registerWithEmailAndPassword(firstname,secondname,email,password,accounttype) 
                  setLoader(!loader)
           
        }} type="sumbit" variant="contained" color="primary" fullWidth>Sign up</Button>
       
        <Typography style={{marginTop:20,fontSize:12}}> Have an account ?
            <Link style={{color:"rgb(53, 53, 155)"}} to="/">Log in</Link>
        </Typography>
       
        
    </Grid>
    <div className="login-img1-cont">

  </div>
</div>
 </div>
}
</div>

)
}