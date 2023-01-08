import react from "react";
import reactDOM from "react-dom";
import  "./style.css"
import hero from "../images/hero.svg"
import woman from "../images/woman.png"
function FirstIntro(){
    return(
        <div className="intro" >
            <h1>Designer, Frontend Developer and FreeLancer</h1>
            <p>
                I design and code beautifully simple things, and I love what I do
            </p>
            <p className="portfolio-img">
                <img src={require("../images/woman.png")}></img>
            </p>
            <img src={hero}></img>
        </div>

    )
}
export default FirstIntro;