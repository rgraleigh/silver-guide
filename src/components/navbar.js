import React from 'react';
import Link from 'gatsby-link';

function Navbar() {

  const navStyle = {
    backgroundColor: "#999999",
    color: "#000000"
  };

  return (
    <nav className='darkgray1'>
      <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/agile/">Agile</Link></li>
        <li><Link to="/clients/">Clients</Link></li>
        <li><Link to="/e-commerce/"></Link></li>
        <li><Link to="/websites/"></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
