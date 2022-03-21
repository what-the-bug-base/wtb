import React from "react";
import "./style.css"

export default function SideBarContent(){
    return(
        <div className="sidebarcontent">
            <h4><span className="sidebarcontent_hash">Topics</span></h4>
            <h4><span className="sidebarcontent_hash">Resources</span></h4>
            <h4><span className="sidebarcontent_hash">Playground</span></h4>
            <h4><span className="sidebarcontent_hash">Community</span></h4>

        </div>
    )
}