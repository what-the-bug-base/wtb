import React from "react"
import "./styles.css"
import ContentHeader from "../ContentHeader"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'chart.js/auto';
import {Bar,Doughnut} from "react-chartjs-2"
import Sidebarprofile from "../Sidebarprofile";


export default function Analytics( sidebarprofile,setSidebarprofile){
    const state={
        labels:[
            'quiz','presentations','extra'
        ],
        datasets:[
            {
                label:'Students',
                backgroundColor:[
                    '#B21F00',
                    '#C9D300',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor:[
                    '#501800',
                    '#4b5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data:[0,0,0,0]
            }

        ]
    }
    const months={
        labels:[
            'Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'
        ],
        datasets:[
            {
                label:'Analytics',
                backgroundColor:[
                    '#B21F00',
                    '#C9D300',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor:[
                    '#501800',
                    '#4b5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data:[0,0,0,0]
            }

        ]
    }
    return(
        <div className="analytics-cont-outer">
        <div style={{backgroundColor:'rgb(122, 122, 243)',position:'absolute',bottom:"0px",height:"10px",left:'0px',width:"100%"}}></div>

            <div className="analytics-cont-inner">

                <div className="class-overview-cont">
                    <div className="class-report-numbers">
                        <div syle={{display:'flex',flexDirection:'row',flex:1,width:'"100%',justifyContent:"space-between",alignItems:'center'}}>
                    <p className="overview-title">Overview</p>
 <select className="subject-filter">
                        <option>Filter</option>
                           
                        </select>
                        </div>
                    <div className="overview-report-cont1">
                      <p className="overview-report-title">Currently Enrolled</p>
                    </div>
                    <div className="overview-report-cont2">
                    <p className="overview-report-title">Marked Present</p>
                        </div>
                        <div className="overview-report-cont3">
                        <p className="overview-report-title">Active Students</p>
                        
                        </div>
                    </div>
                    <div className="class-report-graph">
                        <div className="class-report-nav">
                    <p className="graph-title" >Interaction Analytics</p>
                    <MoreVertIcon fontSize="small"/>

                    </div>
                    <div className="doughnut-cont">
               <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}/>
          </div>
                    </div>
                    
                </div>
                <div className="class-report-cont">
                <div className="class-report-cont-inner">
                    <div className="class-attendance-report">
                        <div className="class-attendance-nav">
                        <p className="class-attendance-graph-title">Attendance Analysis</p>
                        <select className="class-activity-timespan">
                        <option>Filter</option>
                            <option>Yearly</option>
                            <option>Monthly</option>
                            <option>Daily</option>
                        </select>
                        
                        </div>
                        <div className="bar-cont">

                        <div className="bar-cont2">
                       

</div>
</div>
                    </div>
                    <div className="class-activity-report">
                    <div className="class-attendance-nav">
                        <p className="class-activity-title">Class Activity</p>
                        <select className="class-activity-timespan">
                            <option>present</option>
                            <option>last 24hr</option>
                        </select>

                        </div>
                        
                        <div className="class-activity-nav2">
                            <p>Name</p>
                            <p>Role</p>
                            <p>Attendance</p>
                            <p>Last Active</p>
                            <p>Activity</p>

                        </div>
                        <div className="class-activity-content">
                            <p><i>No Data Available</i></p>

                        </div>
                        </div>

                </div>
                    
                    
                    </div>
            

            </div>

            </div>
    )
}