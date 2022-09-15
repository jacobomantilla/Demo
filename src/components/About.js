import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return (
    <>
      <div style={{marginTop:'10rem',width:'100%',height:'1px'}} className="about-scroll"></div>
      <div className='container about' > <h1> Meet the Staff </h1></div>
      <div className="container about">
        <div className="row">
          <div className="col-md-4 text-center">
            <img alt="about" src="../img/img1.jpg" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h2 className="main-title about-h4">Jessica Kouch</h2>
            <p className="main-p">
              Director of Business Services 
            </p>
          </div>
        </div>
      </div>
      <div className="container about">
        <div className="row">
          <div className="col-md-4 text-center">
            <img alt="about" src="../img/img2.jpg" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h2 className="main-title about-h2">Brian Kunkler</h2>
            <p className="main-p">
              Chief Operations Officer
            </p>
          </div>
        </div>
      </div>
      <div className="container about">
        <div className="row">
          <div className="col-md-4 text-center">
            <img alt="about" src="../img/img3.jpg" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h2 className="main-title about-h2">Satheesh Sebastian</h2>
            <p className="main-p">
              Director of Technologies 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
