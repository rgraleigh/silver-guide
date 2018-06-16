import React from 'react';

const footerContainer = {
  backgroundColor: "#0099ff",
  color: "#FCFCFC",
  padding: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

const footerStyle = {
  backgroundColor: "#333333",
  color: "#fcfcfc",
  padding: "20px"
};

const socialListStyle = {
  listStyle: "none",
  display: "flex",
  margin: "0px 10px 10px 10px",
};

const socialLinkStyle = {
  marginRight: 10,
};

function Footer() {
  return (
    <footer className='darkgray1' style={footerContainer}>
      <div className=''>
        <p className=''>
          &copy; 2006 &mdash; 2018. All rights reserved. RGR Digital, LLC.
        </p>
      </div>
      <div className='' >
        <ul className='' style={socialListStyle}>
          <li className={socialLinkStyle}>FB</li>
          <li>TW</li>
          <li>LI</li>
          <li>GB</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
