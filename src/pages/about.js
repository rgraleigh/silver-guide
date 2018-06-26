import React from 'react';
import Link from 'gatsby-link';

const flexxy = {
  display: "flex",
  backgroundColor: "blue"
};

const aboutSection = {
  backgroundColor: "#F3F3F3"
};

const professionalExperience = {
  backgroundColor: "#333333"
};

const volunteerExperience = {
  backgroundColor: "#ff0000"
};

const educationSection = {
  backgroundColor: "#F3F3F3"
};

const blueBottomBorder = {
  borderStyle: 'solid',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottomColor: '#0099FF'
};

const AboutPage = () => (
  <div style={{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    }}>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <div>
      <h2>
        <span style={blueBottomBorder}>
          About Robert G. Raleigh
        </span>
      </h2>
      </div>
      <div>
      <p>
        Robert G. Raleigh is a recognized agile servant leader with 10+ years of experience.
      </p>
      <p>
        His work in the technology industry. In 2014, his team were global finalists for the Imagine K12 YCombinatorFund.
        Between 2012 &mdash; 2016, Robert worked to strengthen workng at Log Camp.
        Between 2016 &mdash; 2018 while working at Hello World software development agency.
      </p>
      </div>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <h2>
        <span style={blueBottomBorder}>
          Robert's Story
        </span>
      </h2>
      <p>
        Robert G. Raleigh is a recognized agile servant leader with 10+ years of experience.
      </p>
      <p>
        His work in the technology industry. In 2014, his team were global finalists for the Imagine K12 YCombinatorFund.
        Between 2012 &mdash; 2016, Robert worked to strengthen workng at Log Camp.
        Between 2016 &mdash; 2018 while working at Hello World software development agency.
      </p>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <h2>
        <span style={blueBottomBorder}>Ideal Roles</span>
      </h2>
      <div>
        <h3>
          <span>Agile Project Management</span>
        </h3>
        <ul>
          <li><p>Portland State University</p></li>
          <li><p>Portland Community College</p></li>
        </ul>
      </div>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <div>
        <h3>
          <span>Scrum Master</span>
        </h3>
        <ul>
          <li><p>Portland State University</p></li>
          <li><p>Portland Community College</p></li>
        </ul>
      </div>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <div>
        <h3>
          <span>Frontend Developer</span>
        </h3>
        <ul>
          <li><p>Portland State University</p></li>
          <li><p>Portland Community College</p></li>
        </ul>
      </div>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <h2>
        <span style={blueBottomBorder}>
          Professional Experience
        </span>
      </h2>
      <p>
        Robert G. Raleigh is a recognized agile servant leader with 10+ years of experience.
      </p>
      <ul>
        <li><b>Chief Product Officer</b>Airo</li>
        <li><b>IT Project Manager</b>Hello World Dev's</li>
        <li><b>Program Director</b>Log Camp at Impact NW</li>
        <li><b>Shift Leader and Trainer</b><p>Oregon Health Sciences University</p></li>
        <li><b>Corvallis-Benton Economic Development Group</b></li>
      </ul>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3", justifyContent: "center", alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <h2>
        <span style={blueBottomBorder}>
          Volunteer Experience
        </span>
      </h2>
      <p>
        Robert G. Raleigh is passionate .
      </p>
      <ul>
        <li><b>Event Host</b> Downtown Compassion Clinit; Portland, OR</li>
        <li><b>Board Secretary</b> First Baptist Church of Portland; Portland, OR</li>
        <li><b>Volunteer</b> Bridgetown Church; Portland, OR</li>
        <li><b>Community Leaders Council</b><p>NAYA Youth and Family Center; Portland, OR</p></li>
        <li><b></b></li>
      </ul>
    </section>

    <section style={{
      display: 'flex',
      flexDirection: "column",
      backgroundColor: "#F3F3F3",
      justifyContent: "center",
      alignContent: "space-between",
      minWidth: 1280,
      padding: 20
    }}>
      <div>
        <h2>
          <span style={blueBottomBorder}>
            Education
          </span>
        </h2>
        <ul>
          <li>
            <p>Portland State University: Bachelor of Arts, English. Focus in professional writing.</p>
          </li>
          <li>
            <p>
              Portland Community College: Management and Supervisory Development.
              Studies in Leadership and Project Management
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default AboutPage
