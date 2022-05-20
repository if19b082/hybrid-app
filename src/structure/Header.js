import React from 'react';
import { NavLink } from 'react-router-dom';
import { Global, css } from '@emotion/react'

const headerStyle = css`
  position: relative;
  text-align: center;
  padding-top: 3em;

  img {
    display: block;
    margin-left: 20px;
    margin-right: auto;
    width: 20%;
  }

  nav {
    max-width: 63.75em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3em;

    padding: 0.5em;
    background-color: #ffffff;
    border-radius: 7em;
    border: 1px solid rgba(32, 33, 36, 0.12);
    background-clip: padding-box;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;

    a {
      position: relative;
      color: #5c4268;
      border: 2px solid transparent;
      border-radius: 6em;
      padding: 0 0.75em;
      font-size: 1em;
      line-height: 2em;
      text-decoration: none;
      transition: box-shadow 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
      }

      &:nth-of-type(n + 2) {
        &:before {
          content: '';
          position: absolute;
          left: -2px;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(32, 33, 36, 0.1);
        }
      }

      &.active {
        color: #a84a7a;
      }

      &:focus:not(:active) {
        outline: 2px solid transparent;
        box-shadow: 0 0 0 2px #8b9099;

        &.active {
          box-shadow: 0 0 0 2px #a84a7a;
        }
      }
    }
  }
`;

const Header = () => (
    <>
        <Global styles={headerStyle} />
        <header>
            <nav>
            <NavLink to="/" activeclassname="active" exact="true">
                Menu
            </NavLink>
            <NavLink to="/gps" activeclassname="active" exact="true">
                GPS
            </NavLink>
            </nav>
        </header>
    </>

);

export default Header;


