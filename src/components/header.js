import React from 'react';
import Link from 'gatsby-link';

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  backgroundColor: "#FCFCFC",
  color: "#0099FF",
  marginBottom: "0rem"
};

const Header = ({ siteTitle }) => (
  <div style={headerStyle}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#0099FF',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        listStyleType: "none",
      }}>
        <li style={{
          fontSize: "14px",
          paddingRight: "1rem"
        }}>
        <Link to="tel:+1503765356">+1 (503) 765-9356</Link></li>
        <li style={{
          fontSize: "14px",
          paddingRight: "1rem"
        }}><Link to="mailto:robert@robertgraleigh.com">robert@robertgraleigh.com</Link></li>
        <li style={{
          fontSize: "14px",
          paddingRight: "1rem"
        }}>
          @robertgraleigh
        </li>
      </ul>
  </div>
)

/*

const Header = ({ siteTitle }) => (
  <div style={headerStyle}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#0099FF',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="">
        <li><Link to="tel:+1503765356">+1 (503) 765-9356</Link></li>
        <li><Link to="mailto:robert@robertgraleigh.com">robert@robertgraleigh.com</Link></li>
      </ul>
    </div>
  </div>
)

*/

export default Header;
