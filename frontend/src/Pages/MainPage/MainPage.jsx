import React from "react";
import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Projects from "../../Components/Our projects/Projects";
import Customers from "../../Components/Our customers/Customers";
import Contacts from "../../Components/Contacts/Contacts";



const MainPage = () => {
  return (
    <Layout>
        <section id="top"></section>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Customers />
        <Contacts />
    </Layout>
  );
};

export default MainPage;
