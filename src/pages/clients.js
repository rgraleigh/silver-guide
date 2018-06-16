import React from 'react';

const container = {
  display: "flex",
  flexDirection: "column",
  flexOrder: "reverse",
  color: "#000000",
};

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  justifyContent: "center"
};

const flexItem = {
  justifyContent: "space-between"
};

const ClientsPage = () => (
  <div>
    <header className="">
      <h1>Clients Page</h1>
      <p>This is the sample clients page.</p>
      <p>Add additional rows of clients.</p>
    </header>

    <section style={flexContainer}>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
                <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
                <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>

      <div className="pt-card" style={flexItem}>
        <img src="https://placehold.it/420x260" />
        <h3 className="">Hello World Dev's</h3>
        <p className="">This is the description of Hello World Dev's.</p>
        <span className="pt-tag default">Software Development</span>
        <button className="">Client link</button>
      </div>
    </section>
  </div>
)

export default ClientsPage;
