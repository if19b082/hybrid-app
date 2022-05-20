import React from 'react';
import { Global, css } from '@emotion/react'
import fhTechnikumWien from '../assets/img/logo.svg'

const footerStyle = css`
    #foot {
        font-family: Helvetica;
        position : absolute;
        bottom : 0;
        height : 100px;
        margin-top : 60px;
        margin-left: 10px;
    }
    #text {
        font-size: 6px;
        margin-left: 20px;
    }
`;

const Footer = () => (
    <>
        <Global styles={footerStyle}/>
        <footer id="foot">
            <h1>
                <img src={fhTechnikumWien} alt=""/>
                <span id="text">&copy; Tomislav Anic</span>
            </h1>
        </footer>
    </>

);

export default Footer;


