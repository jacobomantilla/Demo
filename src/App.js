import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from 'react';
import Schedule from "./components/Schedule";
import Month from "./components/Month";

//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Routes from "./Routes";
import Login from "./containers/Login";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <Router>
         <Route path="/" component={App}>
            <Route path="login" component={Login}/>
         </Route>
      </Router>
    </>
  );
}

export default App;
