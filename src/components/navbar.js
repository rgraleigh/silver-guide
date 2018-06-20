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
    listStyleType: "none"
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
        <li style={navbarListItems}><Link to="/page-2/" style={navbarLinks}>Home</Link></li>
        <li style={navbarListItems}><Link to="/about/" style={navbarLinks}>About</Link></li>
        <li style={navbarListItems}><Link to="/agile/" style={navbarLinks}>Agile</Link></li>
        <li style={navbarListItems}><Link to="/clients/" style={navbarLinks}>Clients</Link></li>
        <li style={navbarListItems}><Link to="/e-commerce/" style={navbarLinks}>E-Commerce</Link></li>
        <li style={navbarListItems}><Link to="/websites/" style={navbarLinks}>Websites</Link></li>
        <li style={navbarListItems}><Link to="/websites/" style={navbarLinks}>Contact</Link></li>
        <li style={navbarListItems}><Link to="/websites/" style={navbarLinks}>Get Started</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
