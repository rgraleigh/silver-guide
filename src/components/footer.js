import React from 'react';
import Link from 'gatsby-link';

const footerContainer = {
  backgroundColor: "#0099ff",
  color: "#FCFCFC",
  padding: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

const footerItem = {
  flexDirection: "row",
};

const socialList = {
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
};

const socialListItem = {
  marginTop: 10,
  marginRight: 10
};

function Footer() {
  return (
    <footer style={footerContainer}>
      <div style={footerItem}>
        <p className=''>
          &copy; 2006 &mdash; 2018. All rights reserved. &nbsp;
          <Link to="https://www.robertgraleigh.com">RGR Digital, LLC.</Link>
        </p>
      </div>
      <div style={footerItem}>
        <ul style={socialList}>
          <li style={socialListItem}>FB</li>
          <li style={socialListItem}>TW</li>
          <li style={socialListItem}>LI</li>
          <li style={socialListItem}>GB</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
