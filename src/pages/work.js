import React from 'react';

const flexContainer = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap"
};

const sectionHeadingStyle = {
  color: "#000000",
  fontSize: "24px"
}

const pastClientsStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "auto"
};

const pastProjectsStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap"
};

const cardItem = {
  display: "flex",
  flexDirection: "column",
  marginRight: "10px"
};

const WorkPage = () => (
  <div className={flexContainer}>
    <section>
      <h1>Work Page</h1>
      <p>This is the sample clients page.</p>
      <p>Add additional rows of clients.</p>
    </section>

    <section style={sectionHeadingStyle}>
      <div>
        <h2>Past Clients</h2>
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
    <section style={pastProjectsStyle}>
      <h2>Past Projects</h2>
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
