import React from "react";
import "./index.css"
import Info from "./Info"
import Interests from "./Interests";
import About from "./About";
import Footer from "./Footer";

function App() {
  return(
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App;
