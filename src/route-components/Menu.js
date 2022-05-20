import React from 'react';
import Main from '../structure/Main';
import { Global, css } from '@emotion/react'

const menuStyle = css`
  #heading {
    margin-top: 100px;
    margin-left: 80px;
    margin-right: 25px;
    color: #403147;
  }
`;

const Menu = () => (
    <>
        <Main headingText="Hello!">
            <Global styles={menuStyle} />
            <h1 id="heading">Welcome to this hybrid app by Ionic!</h1>
        </Main>
    </>
)

export default Menu;