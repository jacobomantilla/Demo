import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from 'react';
import Schedule from "./components/Schedule";
import Month from "./components/Month";

//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,NavLink} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
