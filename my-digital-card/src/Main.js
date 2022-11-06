import React from "react"
import {BsLinkedin} from 'react-icons/bs';
import { TfiEmail } from "react-icons/tfi";
import Photo from "./Images/Annie.jpeg";

export default function Main(){
    return(
        <div>
            <img id="photo" alt = "Annie" src={Photo}></img>
            <div>
                <div>
                    <h1 className="name">Ananya Divakar Goudar</h1>
                    <h2 className="role">Software Engineer</h2>
                    <h3 className="portfolio">AnanyaGoudar.website</h3>
                </div>
                <div>
                    <a href="mailto:ananyadgoudar@gmail.com">
                        <button id="email-btn">
                            <TfiEmail className="emailIcon"/> Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ananyagoudar/">
                        <button id="linkedIn-btn">
                            <BsLinkedin className="emailIcon"/> LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
