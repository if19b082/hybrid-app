import React from 'react';
import { Global, css } from '@emotion/react'
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const mainStyle = css`
  max-width: 63.75em;
  margin-left: auto;
  margin-right: auto;
  min-height: 40em;
  padding-top: 2em;
  padding-bottom: 2em;
  outline: 0;

  .main-heading {
    font-family: 'cornerstone', sans-serif;
    padding: 1rem 0 2rem;
    color: #313030;
    font-size: 1.8em;
    outline: 0;
    text-align: center;
  }
`;

const Main = ({ headingText, headingLevel = 2, children }) => {
  const H = `h${headingLevel}`;
  return (
    <>
        <Global styles={mainStyle} />
        <main tabIndex="-1" id="main">
            <Helmet>
                <title>{headingText} | Hybrid App by Ionic!</title>
            </Helmet>
            <H className="main-heading" tabIndex="-1">
                {headingText}
            </H>
            {children}
        </main>
    </>
  );
};

Main.propTypes = {
  headingLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Main;
