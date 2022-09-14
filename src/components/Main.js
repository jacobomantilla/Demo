//import Forum from '../components/Forum';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Schedule from './Schedule';
import React from 'react';
import ReactDOM from 'react-dom';
//import Login from './Login';

function Main() {
  return (
    <>
      <main>
        <Services />
        {/* <Forum /> */}
        <Schedule />
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;
