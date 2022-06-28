import React,{useState}from "react"
import "./styles.css"
import Spaceitem from "../Spaceitem"
import ContentHeader from "../ContentHeader"

export default function Space(){

 const spaces =[{id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"},
 {id:0,img:"pic.jpg",name:"space1",timestamp:"12:44"}]

 const data = spaces.map((item)=>{
    return(<Spaceitem key={item.id} item={item}/>)
 })
return(
    <div className="space-cont-outer">
        <ContentHeader/>
        <div className="space-cont-inner">
{data}
</div>

        </div>
)
}