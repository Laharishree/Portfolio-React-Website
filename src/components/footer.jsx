import React from "react";
import ReactDOM from "react-dom";
function Footer(){
    const d = new Date();
let year = d.getFullYear();
    return(
    <div class="footer">
        <p>©  Copyright  {year} @  <span>Laharishree S</span></p>
    </div>
    )
}
export default Footer