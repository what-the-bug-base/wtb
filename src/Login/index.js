import {React,useState,useEffect} from "react"
import "./styles.css"
import {Grid ,Paper,Avatar,TextField,Button, Typography} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useSelector,useDispatch} from "react-redux"
import {selectUser,login,logout} from "../features/userSlice"

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();

   

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
        marginTop:20
    }

return(
    <div>
    <Grid className="login-cont">
       
        <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
            <img className="main-icon"src="/icon-dev.png"/>  
            <h2>Talk Python</h2>
       
        </Grid>
        <TextField label="Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" fullWidth required/>
        <TextField label="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" type="password" fullWidth required/>

        <Button style={btnStyle}  onClick={() => logInWithEmailAndPassword(email, password)} type="sumbit" variant="contained" color="primary" fullWidth>Sign in</Button>
        <Typography component={'p'} >
            <p>Or</p>

        </Typography>
        <div className="customBtn" onClick={signInWithGoogle}class="customGPlusSignIn">
      <span className="icon"></span>
      <span className="buttonText">Google</span>
    </div>



        <Typography >
            <Link to="">Forgot password ?</Link>

        </Typography>
        <Typography> Don't have an acount ?
            <Link to="">Sign up</Link>
        </Typography>
        </Paper>
        
    </Grid>
  
</div>

)
}