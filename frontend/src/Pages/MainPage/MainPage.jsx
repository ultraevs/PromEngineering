import React from "react";
import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Projects from "../../Components/Projects/Projects";
import Customers from "../../Components/Customers/Customers";
import Contacts from "../../Components/Contacts/Contacts";



const MainPage = () => {
  return (
    <Layout>
        <section id="top"></section>
        <Hero />
        <About />
        <Services />
        {/* <Projects /> */}
        {/* <Customers /> */}
        {/* <Contacts /> */}
    </Layout>
  );
};

export default MainPage;
