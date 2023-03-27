
import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Golden Gryphons Netball
        </p>
      </header>
        <Navigation />
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
