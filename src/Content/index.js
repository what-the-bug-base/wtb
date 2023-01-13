import React, { useEffect } from "react";
import "./style.css";
import ContentHeader from "../ContentHeader";
import {
  AnalyticsRounded,
  Timer,
  Graph,
  QuestionAnswer,
  AccountCircle,
  AccountTree,
  BookmarkAdd,
  Analytics,
  Bookmark,
  NotificationsActiveRounded,
  CloseOutlined,
  AddOutlined,
  School,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import toast from "react-hot-toast";
import Notifications from "../Notifications";
import Calendar from "react-calendar";
import Addcont from "../Addcont";
import { useParams } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Weeklyreport from "../Weeklyreport";
import { selectUser, login, logout } from "../features/userSlice";
import Reminder from "../Reminder";
import Todayreport from "../Todayreport";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebarprofile from "../Sidebarprofile";

export default function Content({
  setSlide,
  notifications,
  setNotifications,
  sidebarprofile,
  setSidebarprofile,
}) {
  const [value, onChange] = React.useState(new Date());

  const user = useSelector(selectUser);
  const [calendarbtn, setCalendarbtn] = React.useState(false);
  const [timetablebtn, setTimetablebtn] = React.useState(false);
  const [addbtn, setAddbtn] = React.useState(true);
  const [workspacedata, setWorkspacedata] = React.useState([]);

  const config = {
    headers: { "x-auth-token": localStorage.getItem("token") },
  };

  /**<div onClick={()=>{
                    setSlide(true)}} className="join-mtng">

 <VideoCall></VideoCall>
 <p>join meeting</p>
                </div>

                <div  className="ask-qstn">
                    <QuestionAnswer></QuestionAnswer>
                    <p>ask question</p></div> */
  return (
    <div className="content">
      <ContentHeader
        sidebarprofile={sidebarprofile}
        setSidebarprofile={setSidebarprofile}
        setNotifications={setNotifications}
      />
      {sidebarprofile && (
        <Sidebarprofile
          sidebarprofile={sidebarprofile}
          setSidebarprofile={setSidebarprofile}
        ></Sidebarprofile>
      )}

      <div>
        <div style={{ display: "flex", width: "95%", padding: 7 }}>
          <p style={{ fontSize: 14, fontWeight: "600", color: "gray" }}>
            Overview
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55%",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <button
            onClick={() => {
              setTimetablebtn(true);
              setCalendarbtn(false);
            }}
            style={{
              padding: 7,
              borderColor: "gray",
              border: timetablebtn ? "white" : "1px solid #eee",
              borderRadius: 15,
              justifyContent: "center",
              backgroundColor: timetablebtn ? "rgb(122,122,243)" : "white",
              alignItems: "center",
              alignContent: "center",
              width: "120px",
              cursor: "pointer",
            }}
          >
            Timetable
          </button>
          <button
            onClick={() => {
              setCalendarbtn(true);
              setTimetablebtn(false);
            }}
            name="Calendar"
            style={{
              padding: 7,
              borderColor: calendarbtn ? "white" : "gray",
              border: calendarbtn ? "0px solid white" : "1px solid #eee",
              borderRadius: 15,
              justifyContent: "center",
              backgroundColor: calendarbtn ? "rgb(122, 122, 243)" : "white",
              alignItems: "center",
              alignContent: "center",
              width: "120px",
              cursor: "pointer",
            }}
          >
            Calendar
          </button>

          <button
            style={{
              padding: 7,
              borderColor: "gray",
              border: "1px solid #eee",
              borderRadius: 15,
              justifyContent: "center",
              backgroundColor: "white",
              alignItems: "center",
              alignContent: "center",
              width: "120px",
              cursor: "pointer",
            }}
          >
            Classrooms
          </button>
        </div>
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Weeklyreport />
          <Reminder />
          <div
            style={{
              backgroundColor: "rgb(122, 122, 243)",
              position: "absolute",
              bottom: "0px",
              height: "10px",
              left: "0px",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "rgb(122, 122, 243)",
              boxShadow: "rgba(10, 10, 10, 0.2) 0px 2px 8px 0px",
              alignItems: "center",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: "3",
              bottom: "50px",
              borderRadius: "50%",
              height: "50px",
              right: "40px",
              width: "50px",
            }}
          >
            {addbtn ? (
              <AddOutlined
                onClick={() => {
                  setAddbtn(false);
                }}
                style={{ color: "white" }}
              ></AddOutlined>
            ) : (
              <CloseOutlined style={{ color: "white" }}></CloseOutlined>
            )}
          </div>

          {!addbtn && <Addcont addbtn={addbtn} setAddbtn={setAddbtn}></Addcont>}
          <div className="weekly-report-cont">
            <div className="analytics-icon-cont">
              <Bookmark
                style={{ color: "rgb(122, 122, 243)", fontSize: 19 }}
              ></Bookmark>

              <p
                style={{
                  fontSize: 13,
                  fontWeight: "590",
                  color: "rgb(122, 122, 243)",
                }}
              >
                Pending events
              </p>
            </div>

            <p style={{ fontSize: 13 }}>There are no events</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <div style={{ display: "flex", width: "100%" }}></div>
        <Todayreport />
      </div>
    </div>
  );
}
