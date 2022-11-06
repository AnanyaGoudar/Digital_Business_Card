import React from "react"
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import Main from "./Main"

import "./style.css"

let root = document.getElementById('root');
root = createRoot(root);

root.render(
    <StrictMode>
        <Main/>
        <About/>
        <Interests/>
        <Footer/>
    </StrictMode>,
);




