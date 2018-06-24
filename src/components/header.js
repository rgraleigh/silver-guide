import React from 'react';
import Link from 'gatsby-link';
import * as FontAwesome from 'react-icons/lib/fa';

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  backgroundColor: "#FFFFFF",
  color: "#0099FF",
  marginBottom: "1rem",
  borderTop: "Solid 7px #0099FF",
  padding: "1rem",
  height: "8vh"
};

const headingStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "center",
  margin: "0"
};

const Header = ({ siteTitle }) => (
  <div style={headerStyle}>
      <h1 style={ headingStyle }>
        <Link
          to="/"
          style={{
            color: '#0099FF',
            textDecoration: 'none',
          }}
        >
          RGR:
        </Link>
        <span style={{
          fontSize: "16px"
        }}>Agile Servant Leader proficient in Lean, Scrum, and Kanban.</span>
      </h1>
      <ul style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        listStyleType: "none",
      }}>
        <li style={{
          color: '#0099FF',
          fontSize: "14px",
          paddingRight: "1rem"
        }}>
        <Link to="tel:+1503765356"><FontAwesome.FaPhone />+1 (503) 765-9356</Link></li>
        <li style={{
          color: '#0099FF',
          fontSize: "14px",
          paddingRight: "1rem"
        }}>
          <Link to="mailto:robert@robertgraleigh.com">
            <FontAwesome.FaEnvelope />
            robert@robertgraleigh.com
          </Link>
        </li>
        <li style={{
          color: '#0099FF',
          fontSize: "14px",
          paddingRight: "1rem"
        }}>
          <FontAwesome.FaSlack />
          RobertGRaleigh
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
