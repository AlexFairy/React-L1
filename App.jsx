import './Component/ResumeStyles.css';
import React from "react";
import Header from './Component/Header';
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;