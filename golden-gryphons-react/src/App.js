
import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import logo from "./Components/images/golden_gryphon_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Golden Gryphons Netball" />
      <h1 style={{ color: "#a18525" }}>Golden Gryphons Netball Club</h1>
      </header>
      <body style={{ background: "#a18525" }}></body>
        <Navigation />
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
