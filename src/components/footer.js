import React from 'react';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';

const footerContainer = {
  backgroundColor: "#3F3F3F",
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
          <li style={socialListItem}>
            <Link to="https://www.facebook.com/robertgraleigh``">
              <FaFacebook />
            </Link>
          </li>
          <li style={socialListItem}>
            <Link to="https://www.twitter.com/robertgraleigh">
              <FaTwitter />
            </Link>
          </li>
          <li style={socialListItem}>
            <Link to="https://www.linkedin.com/in/robertgraleigh">
              <FaLinkedin />
            </Link>
          </li>
          <li style={socialListItem}>
            <Link to="https://www.github.com/robert-g-raleigh">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
