import React from "react"
import "./styles.css"
import ContentHeader from "../ContentHeader"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'chart.js/auto';
import {Bar,Doughnut} from "react-chartjs-2"


export default function Analytics(){
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
                data:[65,59,80,81,56]
            }

        ]
    }
    return(
        <div className="analytics-cont-outer">
            <ContentHeader/>
            <div className="analytics-cont-inner">

                <div className="class-overview-cont">
                    <div className="class-report-numbers">
                    <p className="overview-title">Overview</p>
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
                            <option>Jun 20 - Aug 20 </option>
                            <option>last 24hr</option>
                        </select>
                        
                        </div>
                        <div className="bar-cont">
                        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:13
            },
            legend:{
              display:true,
              position:'right'
            }}}/>
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
                            <p>Student</p>
                            <p>Attendance</p>
                            <p>Adm no</p>
                            <p>Last Active</p>
                            <p>Activity</p>

                        </div>
                        </div>

                </div>
                    
                    
                    </div>
            

            </div>

            </div>
    )
}