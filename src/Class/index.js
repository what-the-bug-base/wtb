
import { CallOutlined, Close, HeadsetRounded, MicOutlined,MicOff, MicSharp, MoreHoriz, MoreVert, RecordVoiceOver, Videocam, VideocamOff } from "@mui/icons-material"
import React, { useEffect, useRef, useState } from "react"
import { useReducer } from "react"
import './style.css'
import styled, { css } from "styled-components";
import Peer from "simple-peer";


export default function Class({classRoomName,userRole,setClassbtn,socket,me,userId}){

    const [stream,setStream] = useState(null)
    const [recievingCall,setRecievingCall] = useState(false)
    const [caller,setCaller] = useState("")
    const [callerSignal,setCallerSignal] = useState();
    const [callAccepted,setCallAccepted] = useState(false);
    const [callEnded,setCallEnded] = useState(false)
    const [name,setName] = useState("");
    const [idToCall,setIdToCall] = useState('')
    const [loading,setLoading] = useState('false');
    const [chat,setChat] = useState(true)
    const [modal,setModal] = useState(true)
    const [mute,setMute] = useState(false);
    const [stopVideo,setStopVideo] = useState(false)

    const myVideo =useRef();
    
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((currentStream)=>{
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;

        });
        socket.on("calluser",({from,name,signal})=>{
            setRecievingCall(true);
            setCaller(from)
            setName(name);
            setCallerSignal(signal);
        })
    },[socket])

    const callUser = (id) =>{
        setLoading(true);
        const peer = new Peer({
            initiator:true,
            trickle:false,
            stream:stream,
        })
        peer.on("signal",(data)=>{
            socket.emit("calluser",{
                userToCall:id,
                signalData:data,
                from:me,
                name:name,
            })
        })
        peer.on('stream',(stream)=>{
            userVideo.current.srcObject = stream;


        })
        socket.on("callaccepted",({signal})=>{
            setCallAccepted(true)
            setModal(false)
            peer.signal(signal);
        })
connectionRef.current = peer;
    }
    const answerCall = () => {
        setCallAccepted(true);
        setModal(false);
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream: stream,
        });
    
        peer.on("signal", (data) => {
          socket.emit("answercall", { signal: data, to: caller });
        });
    
        peer.on("stream", (stream) => {
          userVideo.current.srcObject = stream;
        });
    
        peer.signal(callerSignal);
        connectionRef.current = peer;
      };
    

    const leaveCall = () => {
        setCallEnded(true);
        setClassbtn(false)
        connectionRef.current.destroy();
        window.location.reload();
      };
    
      const handleClick = () => {
        setModal(false);
        setIdToCall("");
        setName("");
      };
    const muteUnmute = () => {
        const enabled = stream.getAudioTracks()[0].enabled;
        if (enabled) {
          stream.getAudioTracks()[0].enabled = false;
          setMute(true);
        } else {
          stream.getAudioTracks()[0].enabled = true;
          setMute(false);
        }
      };
    
      const playStopVideo = () => {
        const enabled = stream.getVideoTracks()[0].enabled;
        if (enabled) {
          stream.getVideoTracks()[0].enabled = false;
          setStopVideo(true);
        } else {
          stream.getVideoTracks()[0].enabled = true;
          setStopVideo(false);
        }
      };
return(
    <div className="class-cont">
<div className="class-room-cont">
   <div className="class-board-cont">
    <div className="class-name-cont">
<p className="class-name-title">{classRoomName}</p>
    </div>
    <div className="class-box-cont">
    
    </div>
    <div className="class-tools-cont">
    <div className="class-tools-cont-inner">
       <div  onClick={muteUnmute} className="class-tool-cont">
       {mute ? <MicOff></MicOff>:
        <MicSharp></MicSharp>}
       </div>
       <div className="class-tool-cont" onClick={playStopVideo}>
       {stopVideo ?<VideocamOff/> : <Videocam></Videocam>}
       </div>
       <div className="class-tool-cont">
        <MoreVert></MoreVert>
       </div>
       <div onClick={leaveCall} className="class-tool-cont-special">
        <CallOutlined style={{color:'white'}}></CallOutlined>
       </div>
       <div>
      
       </div>
    </div></div>
    </div>

    <div className="class-instructor-cont">
        <div className="class-name-cont">
            <p className="class-instuctor-title">Instructor</p>
        </div>
        <div className="instuctor-cont-video">
        {stream && (
          
              <video style={{width:'auto',height:"220px"}} playsInline ref={myVideo} muted autoPlay />
        
          )}
          {callAccepted && !callEnded && (
            <>
              <video playsInline ref={userVideo} autoPlay />
            </>
          )}

        </div>
    </div>
    {userRole==="instructor"&&(
        <AnswerCall show={modal}>
            <Modal>
                <Header>
                    <span>Participants</span>
                    <Close onClick={()=>setModal(false)}/>
                </Header>
                <Participants>
                    {recievingCall && !callAccepted && (
                        <User>
                            <span>{name}</span>
                            <AcceptButton onClick={answerCall}>Accept</AcceptButton>
                    </User>
                    )}
                </Participants>
                </Modal>
        </AnswerCall>)}
    
    </div>
    </div>
)

}


const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const VideoContainer = styled.div`
  flex-grow: 1;
  background-color: black;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;

  > video {
    max-width: 30rem;
    max-height: 22rem;
    border: 1px solid red;
  }
`;
const VideoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: #1d1d1d;
  color: #d2d2d2;
  padding: 0.2rem;
`;
const ControlsLeft = styled.div`
  display: flex;
`;
const ControlsCenter = styled.div`
  display: flex;
`;
const ControlsRight = styled.div`
  display: flex;
  align-items: center;
  color: #d40303;
  cursor: pointer;
  margin-right: 1.2rem;
`;

const ControlButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 6rem;
  padding: 0.5rem;
  cursor: pointer;

  > span {
    margin-top: 0.2rem;
  }

  :hover {
    background-color: #3d3d3d;
    border-radius: 0.5rem;
  }
`;

const ChatContainer = styled.div`
  flex: 0.25;
  background-color: #2c2c2c;
  display: ${({ chat }) => (chat ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #3d3d3d;

  > h5 {
    color: #d2d2d2;
    padding: 1rem;
  }
`;
const Chat = styled.div`
  flex-grow: 1;
`;
const InputContainer = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  background-color: #1d1d1d;

  > input {
    border: 0px;
    background: transparent;
    outline: none;
    font-size: 0.95rem;
    color: whitesmoke;
    width: 100%;
  }
`;

const JoinModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.show ? "grid" : "none")};
  place-items: center;
`;

const FormContainer = styled.div`
  background-color: #1d1d1d;
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 2.1rem;
  max-width: 25rem;
  text-align: left;

  > h2 {
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  margin-bottom: 4rem;
  min-width: 20rem;
`;

const Input = styled.input`
  background: transparent;
  padding: 0.7rem;
  border: 1px solid gray;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;

  :focus {
    outline: none;
    border: 0.1px solid rgb(28, 107, 226);
  }
`;

const FormButtons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 0.5rem;
  border: 1px solid gray;
  color: white;
  margin: 0.75rem 1rem;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;

  :hover {
    background-color: #535353c3;
  }

  ${(props) =>
    props.primary &&
    css`
      border: 1px solid #0172e4;
      background-color: #0172e4;

      :hover {
        background-color: #0163e4;
      }

      :disabled {
        background-color: #2e2e2e;
        border: 1px solid #2e2e2e;
        color: gray;
      }
    `}
`;

const AnswerCall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.show ? "grid" : "none")};
  place-items: center;
`;

const Modal = styled.div`
  background-color: #1d1d1d;
  border: 1px solid gray;
  border-radius: 0.5rem;
  min-width: 25rem;
  padding: 1rem;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d2d2d2;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
`;



const Participants = styled.div`
  display: flex;
  flex-direction: column;
  color: #d2d2d2;
  min-height: 10rem;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
const AcceptButton = styled.button`
  padding: 0.2rem;
  border-radius: 0.5rem;
  color: #d2d2d2;
  border: 1px solid #0172e4;
  background-color: #0163e4;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d2d2d2;
  padding-top: 1rem;
  border-top: 1px solid gray;
`;