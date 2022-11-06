import React from "react"
import Image1 from "./Images/GitHub Icon.png"
import Image2 from "./Images/Instagram Icon.png"

export default function Footer(){
    return(
        <nav className="footer">
            <a href="https://github.com/AnanyaGoudar">
            <img id="github"alt ="github_Icon" src={Image1}></img>
            </a>
            <a href="https://www.instagram.com/annie_dg/">
            <img id="insta"alt = "insta_Icon" src={Image2}></img>
            </a>
        </nav>
    )
}