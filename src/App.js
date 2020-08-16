import React from 'react';
import TheNavBar from "./Components/navbar";
import IntroSect from "./Components/IntroSect";
// import TheCarousel from "./Components/TheCarousel";
import About from "./Components/About";
import Services from "./Components/Services";
import './App.css';
import TestCarousel from './Components/TestCarousel';
import TextCarousel from './Components/Carousel';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <>
    <div className="app">
      <TheNavBar />
      <IntroSect />
      {/* <Thl /> */}
      {/* <TestCarousel /> */}
      <TextCarousel />
      <About />
      <Services />
      <MyFooter />
    </div>
    </>
  );
}

export default App;
