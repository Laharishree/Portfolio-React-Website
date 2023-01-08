import React from "react";
import  ReactDOM  from "react-dom";
import "./style.css"
function StartProject(){
   return( <div className="Start">
    <hr></hr>
        <table cellPadding={"20px"}>
            <th>
            <h1>Start Project</h1>
            </th>
            <th>
            <p>Interested in working together? we should chat !!</p>
            </th>
            <th>
            <button className="Button">
                Lets Do This
            </button>
            </th>
        </table>
    </div>)
}
export default StartProject