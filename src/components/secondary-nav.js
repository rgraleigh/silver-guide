import React from 'react';
import Link from 'gatsby-link';

const SecondaryNavStyle = {
  backgroundColor: "#F2F2F2",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-around",
  padding: "20px"
};

const secondaryNavLinkStyle = {
  color: "#000000"
}

function SecondaryNav () {
  return (
    <section style={SecondaryNavStyle}>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <img src="https://placehold.it/240x240" />
        <h3>About Robert G. Raleigh</h3>
        <br/>
        <br/>
        <p>
          Robert G. Raleigh is a servant leader with 10+ years of broad experience in the technology industry.
        </p>
      </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li style={secondaryNavLinkStyle}>
            <h3>Products</h3>
          </li>
          <li >
            <Link to="" style={secondaryNavLinkStyle}>
              Micro-Sites
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              Websites
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              E-Commerce
            </Link>
          </li>
          <li><Link to=""></Link></li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li>
            <h3>Services</h3>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              Website Development/Design
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              E-Commerce
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              Agile Project Management
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              Scrum Master
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li style={secondaryNavLinkStyle}>
            <h3>Work</h3>
          </li>
          <li >
            <Link to="" style={secondaryNavLinkStyle}>
              Clients
            </Link>
          </li>
          <li>
            <Link to="" style={secondaryNavLinkStyle}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li style={secondaryNavLinkStyle}>
            <h3>Contact Info</h3>
          </li>
          <li style={secondaryNavLinkStyle}>
            <Link to="">
              +1 (503) 765-9356
            </Link>
          </li>
          <li>
            <Link to="">
              robert@robertgraleigh.com
            </Link>
          </li>
          <li>
            <Link to="">
              RobertGRaleigh
            </Link>
          </li>
          <li>
            <Link to="">
              Scrum Master
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SecondaryNav;
