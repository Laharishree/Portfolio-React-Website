import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function WorkImg(Props){
    return(<div className="WorkImg">
        <img src={require("../images/work1.png")}></img>
        <br></br>
        <img src={require("../images/work2.png")}></img>
        <br></br>
        <img src={require("../images/work3.png")}></img>
        <br></br>
        <hr></hr>
        </div>
    )
}
export default WorkImg