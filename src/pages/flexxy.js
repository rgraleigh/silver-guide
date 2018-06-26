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
  flexDirection: "column",
};

const flexxyRowNoWrap = {
  display: "flex",
  flexDirection: "no-wrap"
};

const flexxyCol = {
  display: "flex",
  flexDirection: "column"
};

const flexxyItem = {
  flex: "1 1 auto"
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
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
    <div style={flexxyRow}>
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
    <div style={flexxyRow}>
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
    <div style={flexxyRow}>
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
    <div style={flexxyRow}>
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
    <div style={flexxyRow}>
      <div style={flexxyItem}>
        <h1>This is an h1</h1>
      </div>
    </div>
  </div>

);

export default FlexxyPage;
