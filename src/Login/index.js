import {React,useState,useEffect} from "react"
import "./styles.css"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useSelector,useDispatch} from "react-redux"
import {selectUser,login,logout} from "../features/userSlice"
import Menuicon from "../Menuicon"
import axios from "axios";
import toast from "react-hot-toast";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader,setLoader] = useState(false);
  
    const dispatch = useDispatch();
    
  const logInWithEmailAndPassword = async (email, password) => {
    const data ={
      "email":email,
           "password" :password   
    }
  try{
   const url = "http://localhost:5000/users/api/v1/auth/login"
  const {data:res} = await axios.post(url,data);

    localStorage.setItem("token",res.data);
    toast.success("Login Successful")
}
  catch(error){

   if(error.response && error.response.status>=400&& error.response.status<=500)
   {
   toast.error(error.response.data.message)
   }else{
    toast.error("Internal Server Error")
   }
  }
 /** try {
   const res = await signInWithEmailAndPassword(auth, email, password);
   const user = res.user
  //remember to change this on production
    toast.success("Login Successful")
          if(user){
      window.location="/portal/new"
    }
  } catch (error) {
        var errorCode = error.code;
    var errorMessage = error.message;

      if (errorCode === 'auth/user-not-found') {
        toast.error("No user is associated with details")
      } else if (errorCode === 'auth/wrong-password') {
         toast.error("Wrong user-email or password")
      }else if (errorCode === 'auth/invalid-email') {
         toast.error("Invalid Email")
      }


 
    
  }**/
  
};


   

    const paperStyle = {
        padding:20,
        height:'70vh',
        width:350,
        margin:'left',
        marginTop:50
      
    }
    const ggStyle ={
        marginTop:17
        
    }
    const btnStyle = {
        marginTop:20,
        // marginBottom:20
    }

return(
    <div className="login-cont-cont">
          

   
                
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
        <input  label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email" fullWidth required/>
        <input  label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>
     </div>
        <Button style={btnStyle}  onClick={() => {
              setLoader(!loader)
              setTimeout(()=>{
                  setLoader(loader=>!loader)},1500);
           logInWithEmailAndPassword(email, password)
             setLoader(!loader)
           
        }} type="sumbit" variant="contained" color="primary" fullWidth>Sign in</Button>
      



        <Typography style={{marginTop:20,fontSize:12}} >
            <Link style={{color:"rgb(53, 53, 155)"}}  to="">Forgot password ?</Link>

        </Typography>
        <Typography style={{fontSize:12}}> Don't have an acount ?
            <Link style={{color:"rgb(53, 53, 155)"}}  to="/sign-up">Sign up</Link>
        </Typography>

        
    </Grid>
<div className="login-img1-cont">
    <img alt="login-img" className="bg-image"src="/assets/sign-up.jpg" />
  </div>
</div>
      </div>
}

</div>

)
}