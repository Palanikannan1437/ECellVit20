import React from 'react';
import './App.css';
import About from './Sections/About';
import Landing from './Sections/Landing';
import Footer from './Sections/Footer';
import Gallery from './Sections/Gallery';
import Team from './Sections/Team';
import Activities from './Sections/Activities';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Activities/>
      <Team/>      
      <Gallery/>
      <Footer/>
    </div>
  );
}
export default App;
