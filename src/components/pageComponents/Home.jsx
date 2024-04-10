import React from "react";
import NavbarIcon from "../layerComponents/NavbarIcon";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollTop";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Content from "./Content";
import { Navbar } from "./Navbar";
import Loader from "../layerComponents/Loader";
import { useState, useEffect } from "react";
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Content />
          <About />
          <Resume />
          <Projects />
          <Contact />
          <ScrollToTopButton />
          <Footer />
          <NavbarIcon />
        </div>
      )}
      
    </>
  );
}

export default Home;
