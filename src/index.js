import React from "react";
import  ReactDOM  from "react-dom";
import FirstIntro from "./components/First"
import Intro from "./components/card";
import Work from "./components/work";
import Footer from "./components/footer";
import Recent from "./components/RecentWork";
import Collab from "./components/collab";
import StartProject from "./components/startproject";
ReactDOM.render(
<div>
    <FirstIntro/>
    <Intro />
    <Work/>
    <Recent/>
    <Collab/>
    <StartProject/>
    <Footer/>

    
</div>
    ,document.getElementById("root"))