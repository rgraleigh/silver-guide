import React from 'react';
import Link from 'gatsby-link';

function SecondaryNav () {
  return (
    <section style={{
      backgroundColor: "#F9F9F9",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: "20px"
    }}>
    <div>
      <img src="https://placehold.it/240x240" />
    </div>
    <div>
      <h3>About Robert G. Raleigh</h3>
      <p>
        Robert G. Raleigh is a servant leader with 10+ years of broad experience in the technology industry.
      </p>
    </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li>
            <h3>Products</h3>
          </li>
          <li>
            <Link to="">
              Micro-Sites
            </Link>
          </li>
          <li>
            <Link to="">
              Websites
            </Link>
          </li>
          <li>
            <Link to="">
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
            <Link to="">
              Website Development/Design
            </Link>
          </li>
          <li>
            <Link to="">
              E-Commerce
            </Link>
          </li>
          <li>
            <Link to="">
              Agile Project Management
            </Link>
          </li>
          <li>
            <Link to="">
              Scrum Master
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyleType: "none"}}>
          <li>
            <h3>Contact Info</h3>
          </li>
          <li>
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
