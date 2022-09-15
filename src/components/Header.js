import React from 'react';
import ReactDOM from 'react-dom';
import { Link,BrowserRouter as Routes, Route, useHistory as useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import Login from"../containers/Login";
function Header() {
  return (
    <header>
      <video src="/daycare.mp4" autoPlay muted></video>
      <div className="row">
        
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
