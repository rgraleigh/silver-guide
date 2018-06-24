import React from 'react';
import Link from 'gatsby-link';

function Billboard() {

  const billboardStyle = {
    backgroundColor: "#999999",
    backgroundImage: "url(http://fillmurray.com/g/1440/600)",
    color: "#000000",
    padding: 40,
    height: "70vh"
  };

  return (
    <section className='billboard' style={billboardStyle}>
      <div>
        <h1 className="">
          Page Title
        </h1>
        <h3 className="">
          Page subtitle
        </h3>
        <button className="default">
          Button text
        </button>
      </div>
    </section>
  );
}

export default Billboard;
