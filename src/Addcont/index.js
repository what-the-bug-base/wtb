import React from "react"
import "./style.css"
import Tooltip from '@mui/material/Tooltip';
import { School, NotificationsOutlined, CloseOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@material-ui/core"

import { selectUser, login, logout } from "../features/userSlice"
import styled, { css } from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField"
import { v4 as uuidv4 } from "uuid"
import axios from "axios";
import toast from "react-hot-toast";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";


export default function Addcont({ setAddbtn }) {
    const user = useSelector(selectUser)
    const [createClassBtn, setCreateClassBtn] = React.useState(false)
    const [Classname, setClassName] = React.useState("")
    const [classType, setClassType] = React.useState("Recurring")
    const [starttime, setStartTime] = React.useState("00:00")
    const [inviteLink, setInviteLink] = React.useState("")
    const [duration, setDuration] = React.useState("40")
    const [onetime, setOneTime] = React.useState(dayjs(new Date()))
    const [loader, setLoader] = React.useState(false)
    const [recurtime, setRecurTime] = React.useState(dayjs(new Date()))

    const handleStartTime = (newTime) => {
        setStartTime(newTime)

    }
 
    const handleOnetime = (newTime) => {
        setOneTime(newTime)

    }
    const handleRecurtime = (newTime) => {
        setRecurTime(newTime)

    }

   
    const scheduleNewClass = async(classname, start, duration, classtype, date) => {
        const invitecode = uuidv4
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
         
        }
       const data = {
            "className": classname,
            "starttime": start,
            "duration": duration,
            "date": date,
            "classtype": classtype,
            "classinvitecode": invitecode


        }
        try{
        const url = "http://localhost:5000/api/v1/class/schedule"
        const {message:res} = await axios.post(url,data,config);
        toast.success(res.message)
        setInviteLink(invitecode)
       
    }catch(err){
        toast.error(err)

    }

    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="add-cont-cont">

                <div className="add-cont-cont-inner">
                    {createClassBtn && <Modal>
                        {loader && inviteLink == "" ? <div style={{ display: 'flex', marginTop: "30px", marginBottom: "40px", maxWidth: "350px", margin: 'auto', alignItems: 'center', justifyContent: 'center' }}><img style={{ width: "50px", margin: 'auto', height: "50px" }} src="/spinner.gif"></img></div> :

                            <div className="classdets-input-bar">
                                <input onChange={(e) => {
                                    setClassName(e.target.value)
                                }} label="Class" placeholder="Enter Class Name" fullWidth required />
                                <div className="classdets-timespan">
                                    <div className={{ display: "flex", width: "200px", height: 'auto', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
                                        <p style={{ fontWeight: "500", fontSize: 13, color: "gray" }}>Start-time</p>
                                        <select defaultValue={starttime} onChange={(e) => { setStartTime(e.target.value) }} className="class-activity-timespan">
                                        <option value="00:00">00:00</option>
                                        <option value="01:00">01:00</option>
                                        <option value="02:00">00:00</option>
                                        <option value="03:00">01:00</option>
                                        <option value="04:00">00:00</option>
                                        <option value="05:00">01:00</option>
                                        <option value="06:00">00:00</option>
                                        <option value="07:00">01:00</option>
                                        <option value="08:00">00:00</option>
                                        <option value="09:00">01:00</option>
                                        <option value="10:00">00:00</option>
                                        <option value="11:00">01:00</option>
                                        <option value="12:00">00:00</option>
                                        <option value="13:00">01:00</option>
                                        <option value="14:00">00:00</option>
                                        <option value="15:00">01:00</option>
                                        <option value="16:00">00:00</option>
                                        <option value="17:00">01:00</option>
                                        <option value="18:00">00:00</option>
                                        <option value="19:00">01:00</option>
                                        <option value="20:00">00:00</option>
                                        <option value="21:00">01:00</option>
                                        <option value="22:00">00:00</option>
                                        <option value="23:00">01:00</option>
                                        <option value="24:00">00:00</option>

                                    </select>

                                    </div>
                                    <div className={{ display: "flex", width: "160px", height: 'auto', alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column" }}>
                                        <p style={{ fontWeight: "500", fontSize: 13, color: "gray" }}>Duration</p>
                                        <select defaultValue={duration} onChange={(e) => { setDuration(e.target.value) }} className="class-activity-timespan">
                                        <option value="40">40m</option>
                                        <option value="60">1hr</option>
                                        <option value="90">1hr 30min</option>
                                        <option value="120">2hrs</option>
                                        

                                    </select>

                                    </div>
                                </div>
                                <div style={{ marginTop: "10px", width: "350px" }}>
                                    <p style={{ fontSize: 13, color: "gray" }}>Please choose class type</p>
                                    <select defaultValue={classType} onChange={(e) => { setClassType(e.target.value) }} className="class-activity-timespan">
                                        <option value="Recurring">Recurring</option>
                                        <option value="Once">Once</option>

                                    </select>
                                    <div style={{ marginTop: "20px" }}>
                                        {classType == "Once" && <DesktopDatePicker
                                            label="Select Date"
                                            inputFormat="MM/DD/YY"
                                            value={onetime}
                                            onChange={handleOnetime}
                                            renderInput={(params) => <TextField size="small"  {...params} />} />}
                                        {classType == "Recurring" && <DesktopDatePicker
                                            label="Select Start Date"
                                            inputFormat="MM/DD/YY"
                                            value={onetime}
                                            onChange={handleOnetime}
                                            renderInput={(params) => <TextField size="small"  {...params} />} />}
                                    </div>
                                    <div style={{ marginTop: "20px", width: "350px" }}>
                                        <Button onClick={() => {
                                       
                                            setLoader(!loader)
                                            scheduleNewClass(Classname, starttime,duration , classType, onetime)
                                           
                                            setTimeout(() => {
                                                setLoader(loader => !loader)
                                            }, 2600);

                                          setLoader(!loader)

                                        }} type="sumbit" variant="contained" color="primary" fullWidth>Schedule</Button>
                                    </div>
                                </div>

                            </div>
                        }
                        {!loader && inviteLink !== "" && <div>
                            <Footer>
                                <span>Classlink: {`https://einsboard.com/invite/` + { inviteLink }}</span>
                                <CopyToClipboard text={`https://einsboard.com/invite/${inviteLink}`}>
                                    <ContentCopy />
                                </CopyToClipboard>
                            </Footer>
                        </div>}
                    </Modal>}
                </div>

                {user.accounttype == "Teacher" && <div onClick={() => {
                    setCreateClassBtn(true)
                }} className="school-icon-cont">
                    <Tooltip title="Add classroom">
                        <School style={{ color: "white" }}></School>
                    </Tooltip>
                </div>}


                <div className="notification-icon-cont">
                    <Tooltip title="Add Reminder">
                        <NotificationsOutlined style={{ color: "white" }}> </NotificationsOutlined>
                    </Tooltip>
                </div>
                <div onClick={() => {
                    setAddbtn(true)
                }} style={{ backgroundColor: 'rgb(122, 122, 243)', boxShadow: "rgba(10, 10, 10, 0.2) 0px 2px 8px 0px", alignItems: 'center', cursor: "pointer", display: 'flex', justifyContent: 'center', position: 'absolute', bottom: "50px", borderRadius: "50%", height: "50px", right: '40px', width: "50px" }}>
                    <CloseOutlined style={{ color: 'white' }}></CloseOutlined>
                </div>


            </div>
        </LocalizationProvider>
    )
}


const Modal = styled.div`
  background-color: white;
  border: 1px solid rgb(122, 122, 243);
  border-radius: 0.5rem;
  width: 30%;
  margin:auto;
  display:flex;

  padding: 1rem;
  text-align: left;
`;  
const ContentCopy = styled(ContentCopyIcon)`
  cursor: pointer;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d2d2d2;
  padding-top: 1rem;
  border-top: 1px solid gray;
`;