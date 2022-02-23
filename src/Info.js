import React from "react";
import "./index.css";
import MyPicture from "./Images/Dani.jpg";
import EmailIcon from "./Images/email_icon_176156.ico";
import LinkedInIcon from "./Images/linkedin_black_logo_icon_147114.ico"

export default function Info() {
    return(
        <div className="info--container">
            <img src={MyPicture} className="info--picture"></img>
            <h1>Dániel Zsolt Jung</h1>
            <h2>Frontend Developer</h2>
            <h3>a website by me</h3>
            <button className="info--email-btn"><img src={EmailIcon} className="info--icon" />Email</button> 
            <button className="info--linkedin-btn"><img src={LinkedInIcon} className="info--icon" />LinkedIn</button>
        </div>
    )
}