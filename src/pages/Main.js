import React from 'react';
// import Loader from '../Components/Loader';
import About from '../Sections/About';
import Landing from '../Sections/Landing';
import Footer from '../Sections/Footer';
import Gallery from '../Sections/Gallery';
import Team from '../Sections/Team';
import Activities from '../Sections/Activities';


function Main() {
  return (
    <>
      {/* <Loader timeout="1000" /> */}
      <Landing />
      <About />
      <Activities />
      <Team />
      <Gallery />
      <Footer />
    </>
  );
}

export default Main;