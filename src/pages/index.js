import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/agile/">Agile</Link></li>
      <li><Link to="/clients/">Clients</Link></li>
      <li><Link to="/e-commerce/"></Link></li>
      <li><Link to="/websites/"></Link></li>
    </ul>
  </div>
)

export default IndexPage
