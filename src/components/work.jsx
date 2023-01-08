import React from "react";
import ReactDOM  from "react-dom";
import CardDisplay from "./workCard";
function Work(){
    return(
        <div>
            <CardDisplay name="Web Designer" content="" skills="UI, UX"/>
            <CardDisplay name="Web Developer" content="" skills="HTML, CSS, JavaScript"/>

        </div>

    )
}
export default Work;