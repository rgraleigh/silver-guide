import React from 'react';
import Link from 'gatsby-link';

const flexxy = {
  display: "flex"
};

const flexxyGrid = {
  display: "flex"
};

const flexxyRow = {
  display: "flex",
  flexDirection: "row",
};

const flexxyRowNoWrap = {
  display: "flex",
  flexDirection: "no-wrap"
};

const flexxyCol = {
  display: "flex",
  flexDirection: "column"
};

const flexxyColWrap = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
};

const flexxyColNoWrap = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "no-wrap"
};

const FlexxyPage = () => (

  <div style={flexxyGrid}>
    <div style={flexxyRow}>
      <h1>This is an h1</h1>
    </div>
    <div style={flexxyRow}>
      <h2>This is an h1</h2>
    </div>
    <div style={flexxyRow}>
      <h3>This is an h1</h3>
    </div>
    <div style={flexxyRow}>
      <h4>This is an h1</h4>
    </div>
    <div style={flexxyRow}>
      <h5>This is an h1</h5>
    </div>
    <div style={flexxyRow}>
      <h6>This is an h1</h6>
    </div>
  </div>

);

export default FlexxyPage;
