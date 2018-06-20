import React from 'react';

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingTop: 20,
};

const cardItem = {
  display: "flex",
  flexDirection: "column",
  flexGrow: "1 1 auto"
};

const ClientsPage = () => (

    <div style={flexContainer}>

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

    </div>
)

export default ClientsPage;
