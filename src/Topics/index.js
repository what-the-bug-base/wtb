import React from "react"
import "./styles.css"
import ContentHeader from "../ContentHeader"

export default function Topics(){
    return(
        <div className="topics-cont">
        <ContentHeader/>
        <div className="apps-cont">
            <div className="app-cont">
                <img style={{"width":"70px","height":"70px"}}src="/assets/github.svg">

                </img>
                <div className="app-inner-cont">
                    <button className="add-rmv-btn">
                        add
                    </button>
                    <p className="description-cont">
                        Github
                        </p>
                </div>
            </div>
        </div>
        </div>
    )
}
