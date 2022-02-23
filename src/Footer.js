import React from "react";
import './index.css';
import GitHubIcon from "./Images/github_logo_icon_143772.ico"
import FacebookIcon from "./Images/fb_icon-icons.com_65434.ico"
import InstagramIcon from "./Images/instagram_f_icon-icons.com_65485.ico"
import TwitterIcon from "./Images/Twitter_Rounded_icon-icons.com_61577.ico"

export default function Footer(){
    return(
        <footer className="footer">
            <img src={GitHubIcon}></img>
            <img src={FacebookIcon}></img>
            <img src= {InstagramIcon}></img>
            <img src={TwitterIcon}></img>
        </footer>
    )
}