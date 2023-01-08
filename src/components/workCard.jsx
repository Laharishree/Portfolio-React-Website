import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"
function CardDisplay(Props){
    return(
        <div className="card-display">
            <h1>{Props.name}</h1>
            <p>{Props.content}</p>
            <h2>Things I enjoy designing</h2>
            <h3>{Props.skills}</h3>
        </div>
    )
}
export default CardDisplay