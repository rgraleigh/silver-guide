import React from 'react';
import Link from 'gatsby-link';

function Navbar() {

  const navbarStyle = {
    backgroundColor: "#F9F9F9",
    padding: 20
  };

  const navbarList = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    listStyleType: "none",
    margin: "0 0 0 0",
    padding: "15px 0px 5px 0px",
    height: "8vh"
  };

  const navbarListItems = {
    display: "flex",
    flexDirection: "row-reverse",
    fontSize: "16px",
  };

  const navbarLinks = {
    color: "#0099FF",
    textTransform: "uppercase"
  };

  return (
    <nav style={navbarStyle}>
      <ul style={navbarList}>
        <li style={navbarListItems}><Link to="/" style={navbarLinks}>Home</Link></li>
        <li style={navbarListItems}><Link to="/about/" style={navbarLinks}>About</Link></li>
        <li style={navbarListItems}><Link to="/products/" style={navbarLinks}>Products</Link></li>
        <li style={navbarListItems}><Link to="/services/" style={navbarLinks}>Services</Link></li>
        <li style={navbarListItems}><Link to="/work/" style={navbarLinks}>Work</Link></li>
        <li style={navbarListItems}>
          <Link to="/contact/" style={navbarLinks}>
            <button style={{
              backgroundColor: "#333333",
              color: "#FCFCFC",
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "5px"
            }}>
              Contact
            </button>
          </Link>
        </li>
        <li style={navbarListItems}>
          <Link to="/get-started/" style={navbarLinks}>
          <button style={{
            backgroundColor: "#FF0000",
            color: "#FCFCFC",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "5px"
          }}>
            Get Started
          </button>
        </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
