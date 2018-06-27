import React from 'react';
import Link from 'gatsby-link';
import TwoColPanel from '../components/two-column-panel.js';

const flexContainer = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap"
};

const sectionHeadingStyle = {
  color: "#000000",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const pastClientsStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "auto"
};

const pastProjectsStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "auto"
};

const cardItem = {
  display: "flex",
  flexDirection: "column",
  marginRight: "10px"
};

const blueBottomBorder = {
  borderStyle: 'solid',
  borderSize: "7px",
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottomColor: '#0099FF'
};

const WorkPage = () => (
  <div className={flexContainer}>

    <TwoColPanel />

    <section style={{sectionHeadingStyle}}>
      <h1>Work Page</h1>
      <p>This is the sample clients page.</p>
      <p>Add additional rows of clients.</p>
    </section>

    <section style={sectionHeadingStyle}>
      <div>
        <h2 style={{fontFamily: "Lato", fontSize: "45px", marginBottom: "40px"}}>
          <span style={blueBottomBorder}>Past Clients</span>
        </h2>
      </div>
    </section>

    <section style={pastClientsStyle}>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

    </section>

    <section style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      padding: 40
    }}>
      <button>
        View Clients
      </button>
    </section>

    <section style={sectionHeadingStyle}>
      <div >
        <h2>
          <span style={blueBottomBorder}>Past Projects</span>
        </h2>
      </div>
    </section>

    <section style={pastProjectsStyle}>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={cardItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

    </section>
  </div>

);

export default WorkPage;
