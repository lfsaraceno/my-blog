import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";


const AboutPage = () => (
  <Layout>
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;