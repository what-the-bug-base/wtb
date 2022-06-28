import React, { useState } from "react"
import "./styles.css"
import { v4 as uuidv4 } from "uuid"
import toast from "react-hot-toast"
import { ToastContainer, toast as toasty } from 'react-toastify';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import axios from "axios"
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Account from "../Account"
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import { AddOutlined } from "@mui/icons-material"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Button from '@mui/material/Button';
import Notifications from "../Notifications"
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import TextField from '@mui/material/TextField';
import NotesIcon from '@mui/icons-material/Notes';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"
import Extra from "../Extra"
import { Check, ExpandMore, FacebookOutlined, LinkedIn, Twitter } from "@mui/icons-material"
import uuid from 'uuid-random';
export default function NewUser(props) {
    //  <button className="new_userstartbtn">Join Workspace</button>
    const [adder, setAdder] = useState(false)
    const [jisti, showJitsi] = useState(false)

    const [popUp, setPopUp] = useState(false)
    const [loader, setLoader] = useState(false);
    const duringPopUp = popUp ? "during-popup" : ""

    const [poster, setPoster] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("")
    const [jwttoken, setJwtToken] = React.useState("")
    const user = useSelector(selectUser)
    /**  <div className="user_info_notifications_header">
                                <img src="/moonlight.svg" className="notification_head"></img>
                                <p></p>
                            </div> */
    const handleMeeting = () => {

        const token = {
            id: uuid(),
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            appId: "vpaas-magic-cookie-d456c721752b4d528af42773285d5f40",
            kid: "vpaas-magic-cookie-d456c721752b4d528af42773285d5f40/2911d6"
        }
        axios.post("https://eins-board-backend.herokuapp.com/tokenizer/", token).then((res) => {
            setJwtToken(res.data)
            showJitsi(true)

            toast.success("meeting started")
        }
        ).catch((err) => {

            toast.error("Could not start Meeting")
        })
    }
    const handleInvite = () => {
        setOpen(false)
        const invite = {
            email: email,
            userId: user.uid
        }
        if (email) {
            axios.post(`https://eins-board-backend.herokuapp.com/workspaces/sendInvite/${props.workspaceurl}`, invite).then((res) => {
                toast.success(`Invite Sent to ${email}`)
            }).catch(err => {

                toast.error("Could not create send Invite " + err)
            })
        }
        else {
            toast.error("Enter a valid email")
        }


    }
    //For students in workspace
    /*
    confirmAlert({
      customUI: ({ setPoster }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <h1>timer</h1>
            <p>You want to delete this file?</p>
            <button onClick={()=>
            setPoster(false)}>No</button>
            <button
              onClick={() => {
                setPoster(false)
              
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
    */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [workspaceId, setworkspaceId] = React.useState("")
    const [workspacename, setworkspaceName] = React.useState("")
    function createNewWorkspace(e) {
        e.preventDefault();
        const id = uuidv4;
        setworkspaceId(id);

        const workspace = {
            workspacename: workspacename,
            workspaceId: workspaceId,
        }

        if (workspaceId && workspacename) {

            axios.post("https://eins-board-backend.herokuapp.com/workspaces/add", workspace).then((res) => {
                toast.success("Created new workspace")
                window.location = `/portal/ws/${workspaceId}`
                toast.success("welcome to your new workspace")
            }).catch(err => {

                toast.error("Could not create workspace")
            })
        } else {
            toast.error("Workspace ID and Workspace Name are required")

        }
    }
    console.log(loader)


    return (
        <>
            {loader == true ? <div className="login-image-cont">
                <img src="/dev-icon.gif" /></div> :
                <div className="newuser_cont">

                    <div className="new-cont-nav">
                        <img src="/icon-dev.png"></img>

                    </div>
                    <div className="user_info_workspace_over">

                        <div className="newuser_dash">

                            <img className="newuser_img" src="/index.svg"></img>
                            <p className="text-user-dash">It seems like you are not in a workspace.Register one below</p>

                            <input className="inputBox" onChange={(e) => setworkspaceName(e.target.value)} value={workspacename} placeholder="workspace name" />
                            <input className="inputBox" onChange={(e) => setworkspaceId(e)} value={workspaceId} placeholder="workspace ID" />
                            <p className="workspace-id-info">*Workspace ID is auto-generated</p>

                            <div className="newuser_btns">
                                <button className="btn new_userstartbtn" onClick={(e) => {
                                    setLoader(!loader)
                                    setTimeout(() => {
                                        setLoader(loader => !loader)
                                    }, 2500);
                                    createNewWorkspace(e)
                                }}>Register Workspace</button>

                            </div>


                        </div>




                    </div>
                    <div className="footer-bar">
                        <div className="footer-bar-outer">
                            <div className="cont-1">
                                <p className="footer-title">Products</p>
                                <p>EinsBoard</p>

                            </div>
                            <div className="cont-2">
                                <p className="footer-title">Learn More</p>
                                <p>What is EinsBoard?</p>
                                <p>Blog</p>


                            </div>
                            <div className="cont-3">
                                <p className="footer-title">About EinsBoard</p>
                                <p>Plans and Pricing</p>
                                <p>Features</p>
                                <p>Privacy Policy</p>

                            </div>
                            <div className="cont-3">
                                <p className="footer-title">Help</p>
                                <p>FAQ</p>
                                <p>Support Center</p>
                                <p>Contact Sales</p>
                            </div>
                        </div>

                        <div className="footer-socials">

                            <div className="footer-copyright">
                                <p>EinsBoard © All Rights reserved </p>
                            </div>
                            <div footer className="footer-socials-box">
                                <FacebookOutlined></FacebookOutlined>
                                <Twitter></Twitter>
                                <LinkedIn></LinkedIn>
                            </div>
                        </div>
                    </div>
                </div>


            }
        </>
    )

}