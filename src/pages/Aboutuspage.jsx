import React from 'react';
import App from '../components/navbar.jsx';
import Head from'../components/Head.jsx';
import Body from '../components/Body.jsx';
import Solution from '../components/Solution.jsx';
import FooterLinks from "../components/FooterLinks";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <App />
      <Head />
      <Body />
      <Solution className="my-8" />
      <FooterLinks />
    </div>
  );
};

export default AboutUs;
