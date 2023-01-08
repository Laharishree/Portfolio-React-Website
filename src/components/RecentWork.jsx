import React from "react";
import ReactDOM from "react-dom";
import WorkImg from "./workpic";
import "./style.css"

function Recent(Props){
    return(
        <div className="works">
            <h1>My Recent Work</h1>
            <p>Here are few project I have worked on. </p>
            <WorkImg add={"../images/work1"}/>          
        </div>
    )
} 

export default Recent;