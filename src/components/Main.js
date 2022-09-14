import About from './About';
import Services from './Services';
import Contact from './Contact';
import React from 'react';
import ReactDOM from 'react-dom';
//import Login from './Login';

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;
