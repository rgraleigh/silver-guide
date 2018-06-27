import React from 'react';
import Link from 'gatsby-link';

function TwoColPanel() {

  const TwoColPanelStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#999999",
    color: "#000000",
    padding: 0,
    width: "100%",
    height: "70vh"
  };

  return (
    <section className='TwoColPanel' style={TwoColPanelStyle}>

      <div style={{backgroundColor: "#FCFCFC", padding: "40px", width: "50%"}}>
        <h2 style={{fontFamily: "Lato", textTransform: "uppercase", fontSize: "60px", marginTop: "20px", marginBottom: "40px"}}>
          RGR | WORK
        </h2>
        <p style={{fontSize: "24px"}}>
          This is the initial placeholder content for the top section of the page. I'll need to think of something
          better content to add to this work section.
        </p>

        <p style={{fontSize: "24px"}}>
          This is the initial placeholder content for the top section of the page. I'll need to think of something
          better content to add to this work section.
        </p>

        <button>Past Clients</button>
        <button>Past Projects</button>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FCFCFC",
        width: "50%"
      }}>
        <img src="https://placehold.it/300x200" style={{display: "flex", flex: "1 1 auto", margin: "0 auto"}}/>
        <img src="https://placehold.it/300x200" style={{display: "flex", flex: "1 1 auto", margin: "0 auto"}}/>
        <img src="https://placehold.it/300x200" style={{display: "flex", flex: "1 1 auto", margin: "0 auto"}}/>
        <img src="https://placehold.it/300x200" style={{display: "flex", flex: "1 1 auto", margin: "0 auto"}}/>
      </div>

    </section>
  );
}

export default TwoColPanel;
